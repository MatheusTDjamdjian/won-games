import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import TextField from '.'
import { Email } from '@styled-icons/material-outlined'

import { TextFieldProps } from './types'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    labelFor: 'Email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { control: false }
  }
} as Meta

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const withError: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

withError.args = {
  error: 'Ops...something is wrong'
}