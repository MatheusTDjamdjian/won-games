import React from 'react'
import * as S from './styles'

import GameItem from '../GameItem'
import { CartListProps } from './types'

const CartList = ({ items, total }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      Total <S.Total>{total}</S.Total>
    </S.Footer>
  </S.Wrapper>
)

export default CartList