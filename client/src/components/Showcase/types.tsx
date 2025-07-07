import { HighlightProps } from '../Highlight/types'
import { GameCardProps } from '../GameCard/types'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
}