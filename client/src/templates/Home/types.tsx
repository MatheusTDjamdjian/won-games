import { BannerProps } from '@/components/Banner/types'
import { GameCardProps } from '@/components/GameCard/types'
import { HighlightProps } from '@/components/Highlight/types'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}