import React from 'react'
import type { Meta, StoryObj } from '@storybook/nextjs'

import BannerSlider from '.'

import { BannerSliderProps } from './types'
 
import items from './mock'
 
 export default {
   title: 'BannerSlider',
   component: BannerSlider,
   args: { items },
   parameters: {
     layout: 'fullscreen',
     backgrounds: {
       default: 'won-dark'
     }
   }
 } as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  )
};