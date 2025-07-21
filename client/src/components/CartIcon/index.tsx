import React from 'react'
import * as S from './styles'

import { CartIconProps } from './types'

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <S.Wrapper>
    {quantity > 0 && <S.Badge aria-label="Cart Items">{quantity}</S.Badge>}
    <img src="/img/icons/shopping_cart.png" aria-label="Shopping Cart" />
  </S.Wrapper>
)

export default CartIcon