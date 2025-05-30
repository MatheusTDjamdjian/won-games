import * as S from './styles'
import React from 'react'
import { HeadingProps } from './types'

export type LineColors = 'primary' | 'secondary'
 
 const Heading = ({
   children,
   color = 'white',
   lineLeft = false,
   lineBottom = false,
   lineColor='primary',
   size = 'medium'
 }: HeadingProps) => (
   <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom} lineColor={lineColor} size={size}>
     {children}
   </S.Wrapper>
 )
 
 export default Heading