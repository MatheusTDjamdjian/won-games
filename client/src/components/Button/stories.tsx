import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

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
    },
    backgrounds: {
       default: 'won-light'
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
    $fullWidth: false,
  },

  render: (args) => <Button {...args} />
}

withIcon.args = {
  size: 'small',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}

export const asLink: StoryObj = {
  render: (args) => <Button {...args} />
}

asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: "a",
  href: '/link'
}