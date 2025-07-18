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
  handlePayment: {
      action: 'clicked'
  },
  argTypes: {
  cards: {
    control: { disable: true },
    table: { disable: true }
  },
 }
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => 
  <div style={{ padding: 16, maxWidth: 400 }}>
    <PaymentOptions {...args} />
  </div>
}