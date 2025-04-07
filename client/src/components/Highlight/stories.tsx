import { Meta, StoryObj } from '@storybook/react'
import Highlight from '.'

const meta = {
  title: 'Highlight',
  component: Highlight,
} satisfies Meta<typeof Highlight>

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Red Dead Redemption 2',
    subtitle: 'Come see John’s new adventures',
    backgroundimage: '/img/red-dead-img.jpg',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
};

export default meta;