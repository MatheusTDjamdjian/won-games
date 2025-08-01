import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import Menu from '.'

import { MenuProps } from './types'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  }
} as Meta

export const Default: StoryObj<MenuProps> = {
  render: (args) => (
      <Menu {...args} />
  )
};

export const Logged: StoryObj<MenuProps> = {
  render: (args) => (
      <Menu {...args} />
  )
};

Logged.args = {
  username: 'John Doe'
}