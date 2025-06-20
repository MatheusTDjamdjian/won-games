import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GameDetails from '.'

const meta: Meta<typeof GameDetails> = {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: {
    platforms: ['windows', 'linux', 'mac']
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
