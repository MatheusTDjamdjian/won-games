import React from 'react'
import * as S from './styles'


import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import Heading from '@/components/Heading'
import BannerSlider from '@/components/BannerSlider'
import GameCardSlider from '@/components/GameCardSlider'
import Highlight from '@/components/Highlight'
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
  <section>
    <Container>
      <Menu/>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>

    <Container>
    <S.SectionMostPopular>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>
      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames}/>
    </S.SectionMostPopular>

    <S.SectionUpcoming>
      <Heading lineLeft lineColor="secondary">
        Upcomming
      </Heading>

      <GameCardSlider items={upcommingGames} />
      <Highlight {...upcommingHighligth} />
      <GameCardSlider items={upcommingMoreGames} />
    </S.SectionUpcoming>

    <S.SectionFreeGames>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighligth} />
      <GameCardSlider items={freeGames} />
    </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer/>
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home