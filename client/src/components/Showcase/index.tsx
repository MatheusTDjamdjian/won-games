import React from 'react'
import GameCardSlider from '../GameCardSlider'
import Heading from '../Heading'
import Highlight from '../Highlight'

import { ShowcaseProps } from './types'

import * as S from './styles'

const Showcase = ({
  title,
  highlight,
  games,
  color = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} color={color} />}
  </S.Wrapper>
)

export default Showcase