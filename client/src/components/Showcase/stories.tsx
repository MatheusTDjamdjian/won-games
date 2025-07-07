import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import Showcase from '.'
import { ShowcaseProps } from './types'

import highlightMock from '../Highlight/mock'
import gamesMock from '../GameCardSlider/mock'

const meta: Meta<ShowcaseProps> = {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}

export default meta

export const Default: StoryObj<ShowcaseProps> = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock,
    games: gamesMock
  }
}

export const WithoutHighlight: StoryObj<ShowcaseProps> = {
  args: {
    title: 'Most Popular',
    games: gamesMock
  }
}

export const WithoutGames: StoryObj<ShowcaseProps> = {
  args: {
    title: 'Most Popular',
    highlight: highlightMock
  }
}
