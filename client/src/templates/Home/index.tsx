import React from 'react'
import * as S from './styles'

import Base from '../Base'

import BannerSlider from '@/components/BannerSlider'
import Showcase from '@/components/Showcase'
import { Container } from '@/components/Container'

import { HomeTemplateProps } from './types'

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
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
        <Showcase title="News" games={newGames} color="black" />
      </S.SectionNews>

      <Showcase title="Most Popular" highlight={mostPopularHighlight} games={mostPopularGames}/>

      <Showcase
        title="Upcoming"
        highlight={upcomingHighlight}
        games={upcomingGames}
      />

      <Showcase title="Free games" highlight={freeHighlight} games={freeGames}/>

    </Base>
  )
}

export default Home