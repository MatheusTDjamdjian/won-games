import React from 'react'

import CardsList from '@/components/CardsList'
import { CardsListProps } from '@/components/CardsList/types'

import mockCards from '../../components/PaymentOptions/mock'
import Profile from "@/templates/Profile"

export default function ProfileCards({ cards }: CardsListProps) {
  return (
    <Profile>
      <CardsList cards={cards} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}