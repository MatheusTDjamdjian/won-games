import React from 'react'
import * as S from './styles'

import Empty from '../Empty'
import Heading from '../Heading'
import GameItem from '../GameItem'

import { OrdersListProps } from './types'

const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black" size="small">
      My orders
    </Heading>

    {items.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        $hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList