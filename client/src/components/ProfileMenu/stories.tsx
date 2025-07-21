import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu from '.'
import { ProfileMenuProps } from './types'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu,
  parameters: {
    actions: {
      handles: ['click']
    }
  }
} as Meta

export const Default: StoryObj<ProfileMenuProps> = {
  render: (args) => 
    <ProfileMenu {...args} />
}