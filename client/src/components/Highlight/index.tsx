import { HighlightProps } from './types'

import React from 'react'
import * as S from './styles'
import Button from '../Button'

const Highlight = ( {title , subtitle, $backgroundimage, floatImage, buttonLabel, buttonLink, $alignment = 'right'}: HighlightProps) => {
  return (
    <S.Wrapper $alignment={$alignment} $backgroundimage={$backgroundimage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title}/>}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button  href={buttonLink}>{buttonLabel}</Button>
      </S.Content>
    </S.Wrapper>
  )
}


export default Highlight