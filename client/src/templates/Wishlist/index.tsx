import React from 'react'
import * as S from './styles'

import GameCard from '@/components/GameCard'
import Showcase from '@/components/Showcase'
import Base from '../Base'
import Heading from '@/components/Heading'
import { Container } from '@/components/Container'
import { WishlistTemplateProps } from './types'

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game, index) => (
        <GameCard key={`wishlist-${index}`} {...game} />
      ))}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist