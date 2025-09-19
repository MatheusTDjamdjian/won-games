import React from 'react'
import { GetStaticProps } from 'next'

import Home from '../templates/Home'

import { HomeTemplateProps } from '@/templates/Home/types'

import { bannerMapper, gamesMapper, highlightMapper } from '../utils/mappers'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_HOME } from '../graphql/queries/home'
import { Query_HomeQuery, Query_HomeQueryVariables } from '@/graphql/generated'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<Query_HomeQuery, Query_HomeQueryVariables>({
    query: QUERY_HOME
  })

  const sections = data.sections ?? null;
  const banners = data.banners ?? []
  const newGames = data.newGames ?? []
  const upcomingGames = data.upcomingGames ?? []
  const freeGames = data.freeGames ?? []

  return {
    props: {
      revalidate: 30,

      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),
      mostPopularGames: gamesMapper(upcomingGames),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}