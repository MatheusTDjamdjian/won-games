import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import ExploreSidebar from '.'
import { ExploreSidebarProps } from './types'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  )
}

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
    <ExploreSidebar
      {...args}
      initialValues={{ windows: true, sort_by: 'low-to-high' }}
    />
  </div>
  )
}