import React from 'react'

import { HighlightProps } from './types'
import type { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

import item from './mock'

const meta = {
  title: 'Highlight',
  component: Highlight,
  args: { ...item }
} satisfies Meta<typeof Highlight>

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
};

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  )
};

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
};

export default meta;