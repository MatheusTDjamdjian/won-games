import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import CartDropdown from '.'
import { CartDropdownProps } from './types'

import items from '@/components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items,
    total: 'R$ 300,00'
  },
} as Meta

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
  )
}