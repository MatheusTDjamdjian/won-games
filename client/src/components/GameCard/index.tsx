import React from 'react'
import * as S from './styles'
import { GameCardProps } from './types'

import Ribbon from '../Ribbon'
import Button from '../Button'
import { FavoriteBorder } from 'styled-icons/material'
import Favorite from './icons/favorite.png'
import AddShoppingCart from './icons/add_shopping_cart.png'

const GameCard = ({title, developer, img, price, promotionalPrice, favorite = false, ribbon, ribbonColor = 'primary', ribbonSize = 'small', onFav}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title}/>
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>
      <S.FavButton onClick={onFav} role="button">
      <Button
  icon={
    favorite ? ( <img src={Favorite.src} alt="Remove from Wishlist" /> ) :
    (
      <FavoriteBorder aria-label="Add to Wishlist" />
    )
  }
/>
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<img src={AddShoppingCart.src} alt="Add to cart" />} size="small"/>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard