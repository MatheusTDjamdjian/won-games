import React from 'react'
import * as S from './styles'
import { GameCardProps } from './types'

import Button from '../Button'
import { AddShoppingCart, Favorite, FavoriteBorder } from 'styled-icons/material'

const GameCard = ({title, developer, img, price, promotionalPrice, favorite = false, onFav}: GameCardProps) => (
  <S.Wrapper>
    <S.ImageBox>
      <img src={img} alt={title}/>
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton onClick={onFav} role="button">
        {favorite ? <Favorite arial-label="Remove from Wishlist" />: <FavoriteBorder aria-label="Add to wishlist"/>}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart/>} size="small"/>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard