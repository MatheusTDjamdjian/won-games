import React from 'react'
import * as S from './styles'

import Base from '../Base'

import BannerSlider from '@/components/BannerSlider'
import Showcase from '@/components/Showcase'
import { Container } from '@/components/Container'

import { HomeTemplateProps } from './types'
const Home = ( { 
banners, 
newGames,
mostPopularHighlight,
mostPopularGames,
upcommingGames,
upcommingHighligth,
upcommingMoreGames,
freeGames,
freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames}/>
    </S.SectionNews>

    <Showcase title="Most Popular" highlight={mostPopularHighlight} games={mostPopularGames}/>

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcommingGames}/>
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames}/>
    </S.SectionUpcoming>

    <Showcase title="Free games" highlight={freeHighligth} games={freeGames}/>
  </Base>
)

export default Home