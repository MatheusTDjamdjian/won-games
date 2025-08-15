import React from 'react'
import Link from 'next/link'
import formatPrice from '../../utils/format-price'
import * as S from './styles'
import { GameCardProps } from './types'

import Ribbon from '../Ribbon'
import Button from '../Button'

const GameCard = ({slug, title, developer, img, price, promotionalPrice, favorite = false, ribbon, ribbonColor = 'primary', ribbonSize = 'small', onFav}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`game/${slug}`} passHref>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>
      <S.FavButton onClick={onFav} role="button">
      <Button
  icon={
    favorite ? ( <img src="/img/icons/coracao.png"alt="Remove from Wishlist" /> ) :
    (
      <S.FavBorder>
        <img src="/img/icons/favorite.png" aria-label="Add to Wishlist" />
      </S.FavBorder>
    )
  }
/>
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <Button icon={<img src="/img/icons/add-shopping-cart.png" alt="Add to cart" />} size="small"/>
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard