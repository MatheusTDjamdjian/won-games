import React from 'react'

import GameCard from '@/components/GameCard'
import Showcase from '@/components/Showcase'
import Base from '../Base'
import Heading from '@/components/Heading'
import Empty from '@/components/Empty'
import { Divider } from '@/components/Divider'
import { Container } from '@/components/Container'
import { Grid } from '@/components/Grid'
import { WishlistTemplateProps } from './types'

const Wishlist = ({
  games = [],
  recommendedGames,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games.length ? (
        <Grid>
          {games?.map((game, index) => (
            <GameCard key={`wishlist-${index}`} {...game} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Your wishlist is empty"
          description="Games added to your wishlist will appear here"
          $hasLink
        />
      )}

      <Divider/>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist