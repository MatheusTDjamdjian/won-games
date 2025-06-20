import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Gallery from '.'
import { GalleryProps } from './types'

import items from './mock'

export default {
  title: 'Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  )
}