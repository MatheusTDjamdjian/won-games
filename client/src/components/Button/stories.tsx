import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default: StoryObj = {
  render: (args) => <Button {...args} />,
}

Default.args = {
  children: 'Buy Now',
}