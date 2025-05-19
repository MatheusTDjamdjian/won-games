import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '.'
import { CheckboxProps } from './types'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj<CheckboxProps> = {
  render: (args) => (
      <Checkbox isChecked {...args} />
  )
}