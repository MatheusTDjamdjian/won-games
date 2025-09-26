import React from 'react'
import * as S from './styles'

import Link from 'next/link'
import Button from '../Button'
import Empty from '../Empty'

import GameItem from '../GameItem'
import { CartListProps } from './types'

const CartList = ({ items = [], total, hasButton = false }: CartListProps) => (
  <S.Wrapper $isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

    <S.Footer>
          {!hasButton && <span>Total:</span>}
          <S.Total>{total}</S.Total>

      {hasButton && (
          <Link href="/cart" passHref>
            <Button>Buy it now</Button>
          </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        $hasLink
      />
    )}
  </S.Wrapper>
)

export default CartList
