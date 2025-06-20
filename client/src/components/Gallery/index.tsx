import React from 'react'
import * as S from './styles'

import Slider from '../Slider'

import { GalleryProps } from './types'
import { SliderSettings } from '../Slider/types'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const Gallery = ({ items }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          role="button"
          key={`thumb-${index}`}
          src={item.src}
          alt={`Thumb - ${item.label}`}
        />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Gallery