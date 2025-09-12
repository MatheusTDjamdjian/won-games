import React from 'react'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

import { QueryRecommendedQuery } from '@/graphql/generated'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'

import Wishlist from '../templates/Wishlist'
import { WishlistTemplateProps } from '@/templates/Wishlist/types'

import gamesMock from '../components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  const section = data.recommended?.section?.[0]

  return {
    props: {
    games: gamesMock,
    recommendedTitle: section?.title,
    recommendedGames: section?.games ? gamesMapper(section.games) : [],
    recommendedHighlight: section?.highlight ? highlightMapper(section.highlight) : null
    }
  }
}

