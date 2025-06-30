import React, { useState, useEffect, useRef } from 'react'
import * as S from './styles'

import Slider from '../Slider'
import SlickSlider from 'react-slick'

import { GalleryProps } from './types'
import { SliderSettings } from '../Slider/types'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from 'styled-icons/material-outlined'

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
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
  ]
}

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1
}

const Gallery = ({ items }: GalleryProps) => {
  const modalSlider = useRef<SlickSlider>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      if (key === 'Escape') setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)
    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  useEffect(() => {
    if (isOpen && modalSlider.current) {
      modalSlider.current.slickGoTo(current, true)
      modalSlider.current.slickPlay();
    }
  }, [isOpen, current])

  return (
  <S.Wrapper>
    {/* Slider principal (sem ref, sem isModal) */}
    <Slider settings={settings}>
      {items.map((item, index) => (
        <img
          role="button"
          key={`thumb-${index}`}
          src={item.src}
          alt={`Thumb - ${item.label}`}
          onClick={() => {
            setCurrent(index)
            setIsOpen(true)
          }}
        />
      ))}
    </Slider>

    {/* Modal */}
    <S.Modal
      isOpen={isOpen}
      aria-label="modal"
      aria-hidden={!isOpen}
      onClick={() => setIsOpen(false)}
    >
      <S.Close
        role="button"
        aria-label="close modal"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(false)
        }}
      >
        <Close size={40} />
      </S.Close>

      <S.Content onClick={(e) => e.stopPropagation()}>
        <Slider ref={modalSlider} settings={modalSettings}>
          {items.map((item, index) => (
            <img key={`gallery-${index}`} src={item.src} alt={item.label} />
          ))}
        </Slider>
      </S.Content>
    </S.Modal>
  </S.Wrapper>
)
}

export default Gallery