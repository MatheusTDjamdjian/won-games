import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import CartIcon from '.'
import { CartIconProps } from './types'

export default {
  title: 'CartIcon',
  component: CartIcon
} as Meta

export const Default: StoryObj = {
  render: () => (
      <CartIcon />
  )
}

export const withItems: StoryObj<CartIconProps> = {
  render: (args) => (
      <CartIcon {...args} />
  )
}

withItems.args = {
  quantity: 3
}