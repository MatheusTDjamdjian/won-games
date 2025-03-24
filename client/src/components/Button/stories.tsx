import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      control: false
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => <Button {...args} />
}

Default.args = {
  children: 'Buy Now'
}

export const withIcon: StoryObj = {
  args: {
    size: 'large',
    fullWidth: false
  },

  render: (args) => <Button {...args} />
}

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}
