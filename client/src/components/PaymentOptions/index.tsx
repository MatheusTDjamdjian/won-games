import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import * as S from './styles'

import { PaymentOptionsProps } from './types'
import { Add } from 'styled-icons/material-outlined'

import Button from '../Button'
import Heading from '../Heading'
import Radio from '../Radio'

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <S.Wrapper>
      <S.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <S.CardsList>
          {cards?.map((card) => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </S.CardItem>
          ))}

          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" $fullWidth $minimal>
          Continue shopping
        </Button>
        <Button
        $fullWidth
        icon={
          <Image
            src="/img/icons/add-shopping-cart.png"
            alt="Carrinho de compras"
            width={24}
            height={24}
          />
        }
        onClick={handlePayment}
        disabled={!checked}
        >
          Buy now
        </Button>

      </S.Footer>
    </S.Wrapper>
  )
}

export default PaymentOptions