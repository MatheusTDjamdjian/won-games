 import { StoryObj, Meta } from '@storybook/nextjs'
 import Heading from '.'
 import React from 'react'

import { HeadingProps } from './types'
 
 export default {
   title: 'Heading',
   component: Heading,
   argTypes: {
     children: {
       type: 'string'
     }
   }
 } as Meta
 
 export const Default: StoryObj<HeadingProps> = (args: HeadingProps) => <Heading {...args} />

 Default.args = {
   children: 'Most Populars',
   color: 'black'
 }