import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import MediaMatch from '.'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyles bgColor={theme.colors.white} />
        <Story />
      </ThemeProvider>
    )
  ]
} as Meta

export const Desktop: StoryObj = {
  render: () => <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
}

export const Mobile: StoryObj = {
  render: () => <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>,
  globals: {
    viewport: {
      value: 'mobile1',
      isRotated: false
    }
  }
}
