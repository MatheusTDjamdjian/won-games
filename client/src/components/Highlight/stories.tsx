import React from 'react'

import { HighlightProps } from './types'
import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

const meta = {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    backgroundimage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/games/rdr2'
  },
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