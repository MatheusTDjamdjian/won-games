import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

import OrdersList from '.'

import itemsMock from './mock'
import { OrdersListProps } from './types'

export default {
  title: 'OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
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

export const Default: StoryObj<OrdersListProps> = {
  render: (args) => 
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
}