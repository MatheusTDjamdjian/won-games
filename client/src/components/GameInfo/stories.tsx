import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'

import GameInfo from '.'

import mockGame from './mock'
import { GameInfoProps } from './types'


export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  args: mockGame
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', margin: 'auto', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  )
}