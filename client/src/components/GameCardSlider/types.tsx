import { GameCardProps } from '../GameCard/types'

export interface CustomArrowProps {
  className?: string
  style?: React.CSSProperties
  onClick?: () => void
  $currentSlide?: number
  $slideCount?: number
  'aria-label'?: string
  tabIndex?: number
  role?: string
  children?: React.ReactNode
}

export type GameCardSliderProps = {
  items: GameCardProps[]
  color?: 'white' | 'black'
}