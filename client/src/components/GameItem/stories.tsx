import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import GameItem from '.'
import { GameItemProps } from './types'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://img.freepik.com/fotos-gratis/bela-foto-aerea-de-uma-praia-com-colinas-ao-fundo-ao-por-do-sol_181624-24143.jpg?t=st=1744659112~exp=1744662712~hmac=ae1d6de8e12eb68f6d21915d59292ecd60041703c9f99a9f04c0582e3fdcd03b&w=996',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  },
  decorators: [
      (Story) => (
        <ThemeProvider theme={theme}>
          <GlobalStyles bgColor={theme.colors.white} />
          <Story />
        </ThemeProvider>
      )
    ]
} as Meta

export const Default: StoryObj<GameItemProps> = {
  render: (args) => (
      <GameItem {...args} />
  )
}

export const WithPayment: StoryObj<GameItemProps> = {
  render: (args) => (
      <GameItem {...args} />
  )
}
WithPayment.args = {
  downloadLink: 'https://5454812484318'
}