import React from 'react'
import { GetStaticProps } from 'next'
import { initializeApollo } from '@/utils/apollo'
import Game, { GameTemplateProps } from '@/templates/Game'

import { QUERY_GAME_BY_SLUG, QUERY_GAMES } from '@/graphql/queries/games'
import { 
  GamesListQuery, 
  GamesListQueryVariables, 
  GameBySlugQueryQuery, 
  GameBySlugQueryQueryVariables 
} from '@/graphql/generated'

import gamesMock from '@/components/GameCardSlider/mock'

const apolloClient = initializeApollo()

export default function GamePage(props: GameTemplateProps) {
  return <Game {...props} />
}

export async function getStaticPaths() {
  const { data } = await apolloClient.query<GamesListQuery, GamesListQueryVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  const paths = data.games.map((game) => ({
    params: { slug: game?.slug || '' }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<GameBySlugQueryQuery, GameBySlugQueryQueryVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: String(params?.slug) }
  });

  const gameData = data.games[0];

  if (!gameData) return { notFound: true };

    return {
      props: {
        revalidate: 60,

        cover: gameData.cover?.url || null,

        gameInfo: {
          title: gameData.name,
          price: gameData.price ?? 0,
          description: gameData.short_description || ''
        },

        gallery: gameData.gallery
          .filter((image) => image !== null)
          .map((image) => ({
            src: image.url ? `http://localhost:1337${image.url}` : '',
            label: image.name || ''
          })) || [],

        description: gameData.description || '',

        details: {
          developer: gameData.developers?.[0]?.name || '',
          releaseDate: gameData.release_date || '',
          platforms: gameData.platforms?.map((p) => p?.name),
          publisher: gameData.publisher?.name || '',
          rating: gameData.rating || null,
          genres: gameData.categories?.map((c) => c?.name),

        recommendedGames: gamesMock
      }
    }
  }
}