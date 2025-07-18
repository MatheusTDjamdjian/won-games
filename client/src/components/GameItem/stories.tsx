import React from 'react'
import { Meta, StoryObj } from '@storybook/react'

import GameItem from '.'
import { GameItemProps } from './types'

export default {
  title: 'GameItem',
  component: GameItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: StoryObj<GameItemProps> = {
  render: (args) => (
      <GameItem {...args} />
  )
}