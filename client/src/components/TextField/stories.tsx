import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import TextField from '.'
import { Email } from '@styled-icons/material-outlined'

import { TextFieldProps } from './types'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    id: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { control: false }
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles bgColor={theme.colors.white} />
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta<TextFieldProps>

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
  ),
  args: {
    error: 'Ops...something is wrong'
  }
}