import React from 'react'
import { GetStaticProps } from 'next'

import { bannerMapper, gamesMapper, highlightMapper } from '../utils/mappers'

import Home from '../templates/Home'
import { HomeTemplateProps } from '@/templates/Home/types'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_HOME } from '../graphql/queries/home'
import { Query_HomeQuery, Query_HomeQueryVariables } from '@/graphql/generated'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<Query_HomeQuery, Query_HomeQueryVariables>({
    query: QUERY_HOME
  })

  const sections = data.sections ?? null
  const banners = data.banners ?? null
  const newGames = data.newGames ?? null
  const upcomingGames = data.upcomingGames ?? null
  const freeGames = data.freeGames ?? null

  const popularSingleGame = sections?.popularGames?.game ?? null

  return {
    props: {
      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title ?? '',
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title ?? '',
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(popularSingleGame ? [popularSingleGame] : []),

      upcomingGamesTitle: sections?.upcomingGames?.title ?? '',
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),

      freeGamesTitle: sections?.freeGames?.title ?? '',
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    },
    revalidate: 30
  }
}