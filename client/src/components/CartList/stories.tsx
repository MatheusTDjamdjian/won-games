import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CartList from '.'
import { CartListProps } from './types'

import mockItems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  argTypes: {
  items: {
    control: { disable: true },
    table: { disable: true }
  },
}
} as Meta

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: '800'}}>
      <CartList {...args} />
    </div>
  )
}