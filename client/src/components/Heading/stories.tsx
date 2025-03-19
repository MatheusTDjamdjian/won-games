 import { StoryObj, Meta } from '@storybook/react'
 import Heading, { HeadingProps } from '.'
 import React from 'react'
 
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