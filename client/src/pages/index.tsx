import React from 'react'

import Home from '../templates/Home'

import { HomeTemplateProps } from '@/templates/Home/types'

import bannersMock from '../components/BannerSlider/mock'
import gamesMock from '../components/GameCardSlider/mock'
import highlightMock from '../components/Highlight/mock'

  export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// getStaticProps => gerar estático em build time (gatsby)
// getServerSideProps => gerar via ssr a cada request (nunca vai para o bundle do client)
// getInitialProps => gerar via ssr a cada request (vai para o client, faz hydrate do lado do client depois do 1 req)

export async function getServerSideProps() {
  // retorno dos dados
  return {
    props: {
      banners: bannersMock,
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