import React from 'react'
import * as S from './styles'
import { GameCardProps } from './types'

import { FavoriteBorder } from '@styled-icons/FavoriteBorder'
import Button from '../Button'
import { AddShoppingCart } from 'styled-icons/material'

const GameCard = ({title, developer, img, price}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title}/>
    </S.ImageBox>
    <S.Info>
      <S.Title>{title}</S.Title>
      <S.Developer>{developer}</S.Developer>
    </S.Info>
    <S.FavButton role="button">
      <FavoriteBorder aria-label="Add to wishlist"/>
    </S.FavButton>
    <S.BuyBox>
      <S.Price>{price}</S.Price>
      <Button icon={<AddShoppingCart/>} size="small"/>
    </S.BuyBox>
  </S.Wrapper>
)

export default GameCard