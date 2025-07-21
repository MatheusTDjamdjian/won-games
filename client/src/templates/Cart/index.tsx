import React from 'react'
import * as S from './styles'

import Showcase from '@/components/Showcase'
import Heading from '@/components/Heading'
import Empty from '@/components/Empty'
import Base from '../../templates/Base'
import { Container } from '@/components/Container'
import { Divider } from '@/components/Divider'

import CartList from '@/components/CartList'
import { CartListProps } from '@/components/CartList/types'
import PaymentOptions from '@/components/PaymentOptions'
import { PaymentOptionsProps } from '@/components/PaymentOptions/types'

import { GameCardProps } from '@/components/GameCard/types'
import { HighlightProps } from '@/components/Highlight/types'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  items,
  total,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>

        {items?.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="Go back to the store and explore great games and offers"
            $hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart