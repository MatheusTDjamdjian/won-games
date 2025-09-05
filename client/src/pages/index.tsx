import React from 'react'
import { GetStaticProps } from 'next'

import Home from '../templates/Home'

import { HomeTemplateProps } from '@/templates/Home/types'

import highlightMock from '../components/Highlight/mock'

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
  const popularGames = data.popularGames ?? []
  const upcomingGames = data.upcomingGames ?? []
  const freeGames = data.freeGames ?? []

  return {
    props: {
      revalidate: 30,

      banners: banners
        .filter((banner) => banner !== null)
        .map((banner) => ({
          img: banner.image?.url ? `http://localhost:1337${banner.image.url}` : '/images/fallback-bg.jpg',
          title: banner.title ?? '',
          subtitle: banner.subtitle ?? '',
          buttonLabel: banner.button?.label ?? '',
          buttonLink: banner.button?.link ?? '',
          ribbon: banner.ribbon?.text ?? null,
          ribbonColor: banner.ribbon?.color ?? null,
          ribbonSize: banner.ribbon?.size ?? null
        })),

      newGamesTitle: sections?.newGames?.title,
      newGames: newGames
        .filter((game) => game !== null)
        .map((game) => ({
          title: game.name ?? '',
          slug: game.slug ?? '',
          developer: game.developers?.[0]?.name ?? '',
          img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '/images/fallback-bg.jpg',
          price: game.price ?? 0
        })),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularHighlight: highlightMock,
      mostPopularGames: popularGames
      .filter((game) => game !== null)
        .map((game) => ({
          title: game.name ?? '',
          slug: game.slug ?? '',
          developer: game.developers?.[0]?.name ?? '',
          img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '/images/fallback-bg.jpg',
          price: game.price ?? 0
        })),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: upcomingGames
        .filter((game) => game !== null)
        .map((game) => ({
          title: game.name ?? '',
          slug: game.slug ?? '',
          developer: game.developers?.[0]?.name ?? '',
          img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '/images/fallback-bg.jpg',
          price: game.price ?? 0
        })),

      upcomingHighlight: highlightMock,

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: freeGames
        .filter((game) => game !== null)
        .map((game) => ({
          title: game.name ?? '',
          slug: game.slug ?? '',
          developer: game.developers?.[0]?.name ?? '',
          img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '/images/fallback-bg.jpg',
          price: game.price ?? 0
        })),

      freeHighlight: highlightMock
    }
  }
}