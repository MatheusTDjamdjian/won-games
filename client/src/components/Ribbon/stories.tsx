import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'
import Ribbon from '.'

import { RibbonProps } from './types'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'Ribbon',
  component: Ribbon,
  args: {
    children: 'Best Seller'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  },
  decorators: [
        (Story) => (
          <ThemeProvider theme={theme}>
            <GlobalStyles bgColor={theme.colors.white} />
            <Story />
          </ThemeProvider>
        )
      ]
} as Meta<RibbonProps>

export const Default: StoryObj<RibbonProps> = {
  args: {
    color: 'secondary',
    size: 'normal'
  },

  render: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
}
