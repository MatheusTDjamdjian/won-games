import React from 'react'
import { StoryObj, Meta } from '@storybook/nextjs'
 
import {GameCardProps} from "../GameCard/types"
import GameCardSlider from '.'

import items from './mock'
 
  export default {
    title: 'GameCardSlider',
    component: GameCardSlider,
    args: { items },
    parameters: {
        layout: 'fullscreen',
        backgrounds: {
          default: 'won-dark'
        }
    }
  } as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider items={[args]} {...args} />
    </div>
  )
};