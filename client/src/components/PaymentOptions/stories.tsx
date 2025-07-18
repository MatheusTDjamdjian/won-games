import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import PaymentOptions from '.'
import { PaymentOptionsProps } from './types'

import cardsMock from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
  cards: {
    control: { disable: true },
    table: { disable: true }
  },
  handlePayment: {
      action: 'clicked'
  }
 }
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => 
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
}