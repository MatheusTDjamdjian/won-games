import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import CardsList from '.'
import { CardsListProps } from './types'  

import cardsMock from '../PaymentOptions/mock'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'CardsList',
  component: CardsList,
  args: {
    cards: cardsMock
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

export const Default: StoryObj<CardsListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  )
}