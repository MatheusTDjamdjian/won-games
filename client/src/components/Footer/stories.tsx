import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'
import Footer from '.'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Footer',
  component: Footer,
} as Meta

export const Default: StoryObj = {
  render: () => (
    <ThemeProvider theme={theme}>
      <GlobalStyles bgColor={theme.colors.white} />
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Footer />
      </div>
    </ThemeProvider>
  ),
}