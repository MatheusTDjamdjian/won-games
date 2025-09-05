import React from 'react'
import * as S from './styles'

import Base from '../Base'

import BannerSlider from '@/components/BannerSlider'
import Showcase from '@/components/Showcase'
import { Container } from '@/components/Container'

import { HomeTemplateProps } from './types'

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingGames,
  upcomingHighlight,
  freeGamesTitle,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  console.log('upcomingHighlight', upcomingHighlight)
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase 
        title={mostPopularGamesTitle} 
        highlight={mostPopularHighlight} 
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        highlight={upcomingHighlight}
        games={upcomingGames}
      />

      <Showcase 
        title={freeGamesTitle} 
        highlight={freeHighlight} 
        games={freeGames}
      />

    </Base>
  )
}

export default Home