import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '.'
import { CheckboxProps } from './types'

export default {
  title: 'Checkbox',
  component: Checkbox
} as Meta

export const Default: StoryObj<CheckboxProps> = {
  render: (args) => (
      <Checkbox {...args} />
  )
}