import React from 'react'
import { Meta, StoryObj } from '@storybook/nextjs'
import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch,
    backgrounds: {
       default: 'won-light'
     }
} as Meta

export const Desktop: StoryObj = {
  render: () => <MediaMatch $greaterThan="medium">Only on Desktop</MediaMatch>
}

export const Mobile: StoryObj = {
  render: () => <MediaMatch $lessThan="medium">Only on Mobile</MediaMatch>
}

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
