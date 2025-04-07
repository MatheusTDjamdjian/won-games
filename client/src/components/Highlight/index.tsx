import { HighlightProps } from './types'

import React from 'react'
import * as S from './styles'
import Button from '../Button'

const Highlight = ( {title , subtitle, backgroundimage, buttonLabel, buttonLink}: HighlightProps) => {
  return (
    <S.Wrapper backgroundimage={backgroundimage}>
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>{buttonLabel}</Button>
      </S.Content>
    </S.Wrapper>
  )
}


export default Highlight