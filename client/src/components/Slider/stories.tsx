import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs'
import Slider from '.'

import { Settings } from 'react-slick';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export default {
  title: 'Slider',
  component: Slider,
  decorators: [
        (Story) => (
          <ThemeProvider theme={theme}>
            <GlobalStyles bgColor={theme.colors.white} />
            <Story />
          </ThemeProvider>
        )
      ]
} as Meta
const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Horizontal: StoryObj = {
  render: () => (
    <Slider settings={settings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
      <Slide>7</Slide>
    </Slider>
  )
}

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  infinite: false, 
  slidesToShow: 1
}

export const Vertical: StoryObj = {
  render: () => (
    <Slider settings={verticalSettings}>
      <Slide>1</Slide>
      <Slide>2</Slide>
      <Slide>3</Slide>
      <Slide>4</Slide>
      <Slide>5</Slide>
      <Slide>6</Slide>
      <Slide>7</Slide>
    </Slider>
  )
}