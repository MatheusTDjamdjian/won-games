import type { Meta, StoryObj } from '@storybook/react'
import Heading from '.'
import React from 'react'

import { HeadingProps } from './types'
import theme from '../../styles/theme'
import GlobalStyles from '../../styles/global'
import { ThemeProvider } from 'styled-components'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {
  render: (args) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles bgColor={theme.colors.white} />
      <Heading {...args} />
    </ThemeProvider>
  ),
  args: {
    children: 'Most Populars',
    color: 'black'
  }
}