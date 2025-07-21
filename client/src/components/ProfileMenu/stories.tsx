import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import ProfileMenu from '.'
import { ProfileMenuProps } from './types'

export default {
  title: 'ProfileMenu',
  component: ProfileMenu
} as Meta

export const Default: StoryObj<ProfileMenuProps> = {
  render: (args) => 
    <ProfileMenu {...args} />
}