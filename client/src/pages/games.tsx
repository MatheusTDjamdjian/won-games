import React from 'react'


import { initializeApollo } from '@/utils/apollo'
import { QUERY_GAMES } from '@/graphql/queries/games'
import { GamesListQuery, QueryGamesQueryVariables } from '@/graphql/generated/index'

import GamesTemplate, { GamesTemplateProps } from "@/templates/Games"
import filterItemsMock from '@/components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<GamesListQuery, QueryGamesQueryVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      games: data.games.map((game: any) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover!.url}`,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}