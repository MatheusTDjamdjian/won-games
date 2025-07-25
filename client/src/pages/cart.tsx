import React from 'react'
import Cart from "@/templates/Cart"
import { CartProps } from "@/templates/Cart"

import highlightMock from '@/components/Highlight/mock'
import gamesMock from '@/components/GameCardSlider/mock'
import itemsMock from '@/components/CartList/mock'
import cardsMock from '@/components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}