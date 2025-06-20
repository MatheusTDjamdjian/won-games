import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'
import mockGame from './mock'

const meta: Meta<typeof GameDetails> = {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mockGame,
  argTypes: {
    releaseDate: {
      control: 'date'
    },
    platforms: {
      control: {
        type: 'check'
      },
      options: ['windows', 'linux', 'mac']
    },
    genres: {
      control: {
        type: 'check'
      },
      options: ['Role-playing', 'Narrative']
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
