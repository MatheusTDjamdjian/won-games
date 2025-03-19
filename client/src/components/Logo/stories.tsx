import { Meta, StoryObj } from '@storybook/react'
import Logo from '.'

const meta: Meta = {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: {
      control: 'radio',
      options: ['white', 'black']
    },
    size: {
      control: 'radio',
      options: ['normal', 'large']
    }
  }
}

export default meta

export const Default: StoryObj = {
  args: {
    color: 'white',
    size: 'normal'
  }
}