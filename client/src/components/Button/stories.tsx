import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import AddShoppingCart from '../../../public/img/icons/add-shopping-cart.png'
import Button from '.'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

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
  },
  decorators: [
        (Story) => (
          <ThemeProvider theme={theme}>
            <GlobalStyles bgColor={theme.colors.white} />
            <Story />
          </ThemeProvider>
        )
      ]
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
  icon: <img src={AddShoppingCart.src} alt="Add to cart" />
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