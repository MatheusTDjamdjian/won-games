import React from 'react';
import { Meta, StoryObj } from '@storybook/nextjs'
import Menu from '.'

import { MenuProps } from './types'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: StoryObj<MenuProps> = (args: MenuProps) => <Menu {...args} />;

Default.parameters = {
  layout: "fullscreen",
  backgrounds: {
    default: 'won-dark'
  }
}