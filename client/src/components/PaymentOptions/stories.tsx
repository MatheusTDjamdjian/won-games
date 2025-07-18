import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import PaymentOptions from '.'
import { PaymentOptionsProps } from './types'

import cardsMock from './mock'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
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

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => <PaymentOptions {...args} />
}