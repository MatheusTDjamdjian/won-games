import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import GameCard from '.'
import { GameCardProps } from './types';

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://i.ibb.co/TB7mRjzj/landscapes-2887796-960-720-1.jpg',
    price: 'R$ 235,00',
    promotionalPrice: 'R$200,00'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
  
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  )
};