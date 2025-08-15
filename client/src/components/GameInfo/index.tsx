import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Ribbon from '@/components/Ribbon'
import formatPrice from '../../utils/format-price'

import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import { GameInfoProps } from './types'

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button
        icon={
          <Image
            src="/img/icons/add-shopping-cart.png"
            alt="Add to cart"
            width={23}
            height={23}
          />
        }
        size="large"
      >
        Add to cart
      </Button>

      <Button
        icon={
          <Image
            src="/img/icons/favorite.png"
            alt="Add to Wishlist"
            width={27}
            height={27}
          />
        }
        size="large"
        $minimal
      >
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo