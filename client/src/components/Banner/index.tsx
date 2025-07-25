'use client'
import React from 'react'
import * as S from './styles'

import Button from '../Button'
import Ribbon from '../Ribbon'

import { BannerProps } from './types'

const Banner = ({ img, title, subtitle, buttonLabel, buttonLink, ribbon, ribbonColor = 'primary', ribbonSize = 'normal' }: BannerProps) => (
  <S.Wrapper>
  {!!ribbon && (
    <Ribbon color={ribbonColor} size={ribbonSize}>
      {ribbon}
    </Ribbon>
  )}
    <S.Image src={img} role="img" aria-label={title}/>

    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }}/> 
      <Button as="a" href={buttonLink} size="large">{buttonLabel}</Button>
    </S.Caption>
  </S.Wrapper>
)

export default Banner