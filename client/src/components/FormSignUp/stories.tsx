import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'

import FormSignUp from '.'

import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles bgColor={theme.colors.white} />
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}