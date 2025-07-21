import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import UserDropdown from '.'
import { UserDropdownProps } from './types'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

export const Default: StoryObj<UserDropdownProps> = {
  render: (args) => (
    <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <UserDropdown {...args} />
  </div>
  )
}

Default.args = {
  username: 'Willian'
}