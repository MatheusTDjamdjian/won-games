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
      <Button icon={<img src="/img/icons/add-shopping-card.png" alt="Add to cart" />} size="large">
        Add to cart
      </Button>
      <Button icon={<img src="/img/icons/favorite-border.png" aria-label="Add to Wishlist" />} size="large" $minimal>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo