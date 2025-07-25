import { LineColors } from "."

export type HeadingProps = {
   children: React.ReactNode
   color?: 'white' | 'black'
   lineLeft?: boolean
   lineBottom?: boolean
   lineColor?: LineColors
   size?: 'small' | 'medium' | 'huge'
 }