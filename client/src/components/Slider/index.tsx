import React from 'react'
import { forwardRef } from 'react';
import SlickSlider from "react-slick";
import * as S from './styles'

import { SliderProps } from './types';

const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> = (
  { children, settings, $isModal = false },
  ref
) => (
  <S.Wrapper $isModal={$isModal}>
    <SlickSlider ref={ref} {...settings}>
      {children}
    </SlickSlider>
  </S.Wrapper>
)

export default forwardRef(Slider)