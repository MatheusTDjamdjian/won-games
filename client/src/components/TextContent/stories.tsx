import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TextContent from '.'

import textMock from './mock'
import { TextContentProps } from './types'

export default {
  title: 'TextContent',
  component: TextContent,
  args: textMock
} as Meta

export const Default: StoryObj<TextContentProps> = {
  render: (args) => (
    <TextContent {...args} />
  )
}