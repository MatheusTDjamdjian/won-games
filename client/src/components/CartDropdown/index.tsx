import React from 'react'
import * as S from './styles'

import CartIcon from '../CartIcon'
import CartList from '../CartList'
import Dropdown from '../Dropdown'

import { CartDropdownProps } from './types'

const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Wrapper>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasButton />
    </Dropdown>
  </S.Wrapper>
)

export default CartDropdown