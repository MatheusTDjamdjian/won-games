import React from 'react'
import GameCardSlider from '../GameCardSlider'
import Heading from '../Heading'
import { GameCardProps } from '../GameCard/types'
import Highlight from '../Highlight'
import { HighlightProps } from '../Highlight/types'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}

const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
)

export default Showcase