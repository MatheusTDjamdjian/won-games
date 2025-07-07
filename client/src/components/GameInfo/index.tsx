import FavoriteBorder from '../GameCard/icons/favorite-border.png'
import AddShoppingCart from '../GameCard/icons/add_shopping_cart.png'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Ribbon from '@/components/Ribbon'

import React from 'react'
import * as S from './styles'
import { GameInfoProps } from './types'

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<img src={AddShoppingCart.src} alt="Add to cart" />} size="large">
        Add to cart
      </Button>
      <Button icon={<img src={FavoriteBorder.src} aria-label="Add to Wishlist" />} size="large" $minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo