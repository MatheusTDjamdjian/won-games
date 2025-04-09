import React from 'react'
import * as S from './styles'
import { GameCardProps } from './types'

import Button from '../Button'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material'

const GameCard = ({title, developer, img, price, promotionalPrice}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title}/>
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton role="button">
        <FavoriteBorder aria-label="Add to wishlist"/>
      </S.FavButton>
      <S.BuyBox>
        <Button icon={<AddShoppingCart/>} size="small"/>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard