import { HighlightProps } from './types'

import React from 'react'
import * as S from './styles'
import Button from '../Button'

const Highlight = ( {title , subtitle, backgroundimage, floatImage, buttonLabel, buttonLink}: HighlightProps) => {
  return (
    <S.Wrapper backgroundimage={backgroundimage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title}/>}
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>{buttonLabel}</Button>
      </S.Content>
    </S.Wrapper>
  )
}


export default Highlight