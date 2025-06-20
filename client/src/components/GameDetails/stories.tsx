import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
} as Meta

export const Default: StoryObj = {
  render: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    </div>
  )
}