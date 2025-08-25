import React from 'react'

import Home from '../templates/Home'

import { HomeTemplateProps } from '@/templates/Home/types'

import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_HOME } from '../graphql/queries/home'
import { HomePageDataQuery } from '@/graphql/generated'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames }
  } = await apolloClient.query<HomePageDataQuery>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 30,

      banners: banners
      .filter((banner): banner is NonNullable<typeof banner> => banner !== null)
      .map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label ?? null,
        buttonLink: banner.button?.link ?? null,
        ...(banner.ribbon && {
          ribbon: banner.ribbon.text ?? null,
          ribbonColor: banner.ribbon.color ?? null,
          ribbonSize: banner.ribbon.size ?? null
        })
      })),

      newGames: newGames
      .filter((game): game is NonNullable<typeof game> => game !== null)
      .map((game) => ({
        title: game.name,
        slug: game.slug ?? '',
        developer: game.developers?.[0]?.name ?? '',
        img: `http://localhost:1337${game.cover?.url ?? ''}`,
        price: game.price
      })),

      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,

      upcomingGames:  upcomingGames
      .filter((game): game is NonNullable<typeof game> => game !== null)
      .map((game) => ({
        title: game.name,
        slug: game.slug ?? '',
        developer: game.developers?.[0]?.name ?? '',
        img: `http://localhost:1337${game.cover?.url ?? ''}`,
        price: game.price
      })),

      upcommingHighligth: highlightMock,

      freeGames: freeGames
      .filter((game): game is NonNullable<typeof game> => game !== null)
      .map((game) => ({
        title: game.name,
        slug: game.slug ?? '',
        developer: game.developers?.[0]?.name ?? '',
        img: `http://localhost:1337${game.cover?.url ?? ''}`,
        price: game.price
      })),

      freeHighligth: highlightMock
    }
  }
}