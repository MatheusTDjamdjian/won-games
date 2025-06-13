import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import FormSignIn from '.'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles bgColor={theme.colors.white} />
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta

export const WithFloatImage: StoryObj = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}