import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'

const meta: Meta<typeof GameDetails> = {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: {
    developer: 'Different Tales',
    releaseDate: '2020-11-21T23:00:00',
    platforms: ['windows', 'mac', 'linux'],
    rating: 'BR0',
    genres: ['Role-playing']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'check', // 'check' funciona melhor para arrays
      },
      options: ['windows', 'linux', 'mac']
    }
  }
}
export default meta

type Story = StoryObj<typeof GameDetails>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  )
}
