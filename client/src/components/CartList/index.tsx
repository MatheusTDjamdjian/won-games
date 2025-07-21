import React from 'react'
import * as S from './styles'

import Link from 'next/link'
import Button from '../Button'

import GameItem from '../GameItem'
import { CartListProps } from './types'

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>

      {hasButton && (
        <Link href="/cart">
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList