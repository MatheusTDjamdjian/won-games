import React from "react"
import { useRouter } from "next/router"
import { initializeApollo } from "@/utils/apollo"

import Game, { GameTemplateProps } from "@/templates/Game"

import gamesMock from '@/components/GameCardSlider/mock'
import highlightMock from '@/components/Highlight/mock'

import { GamesListQuery, GamesListQueryVariables } from '../../graphql/generated/index'
import { QUERY_GAMES, QUERY_GAME_BY_SLUG } from "@/graphql/queries/games"
import { GameBySlugQuery, GameBySlugQueryVariables } from '@/graphql/generated/index'
import { GetStaticProps } from "next"

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // se a rota não tiver sido gerada ainda
  // você pode mostrar um loading
  // uma tela de esqueleto
  if (router.isFallback) return null

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
  const { data } = await apolloClient.query<GameBySlugQuery, GameBySlugQueryVariables>({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: String(params?.slug) }
  })

  const gameData = data.games[0]

  if (!gameData) return { notFound: true }

  return {
    props: {
      revalidate: 60,
      cover: `http://localhost:1337${gameData.cover?.src}`,
      gameInfo: {
        title: gameData.name,
        price: gameData.price,
        description: gameData.short_description
      },
      gallery: gameData.gallery
        .filter((image) => image !== null)
        .map((image) => ({
          src: `http://localhost:1337${image!.src}`,
          label: image!.label || ''
        })),
      description: gameData.description,
      details: {
        developer: gameData.developers?.[0]?.name,
        releaseDate: gameData.release_date,
        platforms: gameData.platforms?.map((p) => p?.name),
        publisher: gameData.publisher?.name,
        rating: gameData.rating,
        genres: gameData.categories?.map((c) => c?.name),
      },
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      recommendedGames: gamesMock
    }
  }
}