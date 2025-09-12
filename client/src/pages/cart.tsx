import React from 'react'
import { initializeApollo } from '@/utils/apollo'
import { gamesMapper, highlightMapper } from '@/utils/mappers'

import { QueryRecommendedQuery } from '@/graphql/generated'
import { QUERY_RECOMMENDED } from '@/graphql/queries/recommended'

import Cart from "@/templates/Cart"
import { CartProps } from "@/templates/Cart"

import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryRecommendedQuery>({
    query: QUERY_RECOMMENDED
  })

  const section = data.recommended?.section?.[0]
  
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedTitle: section?.title,
      recommendedGames: section?.games ? gamesMapper(section.games) : [],
      recommendedHighlight: section?.highlight ? highlightMapper(section.highlight) : null
    }
  }
}