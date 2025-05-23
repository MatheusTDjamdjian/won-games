import React from 'react'
import { StoryObj, Meta } from '@storybook/react'
import BannerSlider, { BannerSliderProps } from '.'
 
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