import { ArrowBackIos as ArrowLeftBase } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRightBase } from '@styled-icons/material-outlined/ArrowForwardIos'

import styled from 'styled-components'
import React from 'react'
import * as S from './styles'

import GameCard from '../GameCard'
import Slider from '../Slider'
import {SliderSettings} from '../Slider/types'
import { GameCardSliderProps, CustomArrowProps } from './types'

const ArrowLeftIcon = styled((props: CustomArrowProps) => {
  const { currentSlide, slideCount, ...rest } = props
  void currentSlide
  void slideCount
  return <ArrowLeftBase {...rest} />
})`
  cursor: pointer;
`

const ArrowRightIcon = styled((props: CustomArrowProps) => {
  const { currentSlide, slideCount, ...rest } = props
  void currentSlide
  void slideCount
  return <ArrowRightBase {...rest} />
})`
  cursor: pointer;
`

const settings: SliderSettings = {
  arrows: true,
  infinite: false,
  slidesToShow: 4,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRightIcon aria-label="next games" />,
  prevArrow: <ArrowLeftIcon aria-label="previous games" />,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        arrows: false,
        slidesToShow: 1.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        arrows: false,
        slidesToShow: 1.1,
      }
    }
  ],
}

const GameCardSlider = ({items, color = 'white'}: GameCardSliderProps) => (
  <S.Wrapper color={color}>
    <Slider settings={settings}>
      {items.map((item, index) => (
          <GameCard key={index} {...item} />
      ))}
    </Slider>
  </S.Wrapper>
)

export default GameCardSlider