import React from 'react'
import { StoryObj, Meta } from '@storybook/nextjs'
import Ribbon from '.'

import { RibbonProps } from './types'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  },
    backgrounds: {
       default: 'won-light'
     }
} as Meta<RibbonProps>

export const Default: StoryObj<RibbonProps> = {
  args: {
    color: 'secondary',
    size: 'normal'
  },

  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
