import React from 'react'

import OrdersList from "@/components/OrdersList"
import { OrdersListProps } from "@/components/OrdersList/types"
import Profile from "@/templates/Profile"

import ordersMock from '@/components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      items: ordersMock
    }
  }
}