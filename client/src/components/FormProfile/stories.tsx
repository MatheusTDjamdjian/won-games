import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FormProfile from '.'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'Form/FormProfile',
  component: FormProfile,
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
    <div style={{ maxWidth: 860, margin: 'auto' }}>
      <FormProfile />
    </div>
  )
}