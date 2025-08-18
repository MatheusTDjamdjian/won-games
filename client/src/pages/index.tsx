import React from 'react'

import Home from '../templates/Home'

import { HomeTemplateProps } from '@/templates/Home/types'

import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

import { initializeApollo } from '@/utils/apollo'
import { QUERY_HOME } from '../graphql/queries/home'
import { QueryHomeQuery } from '@/graphql/generated'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryHomeQuery>({ query: QUERY_HOME })

  return {
    props: {
      revalidate: 30,
      banners: data.banners
      .filter((banner) => banner !== null)
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
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcommingGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  }
}