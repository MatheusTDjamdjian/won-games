import React from 'react'
import * as S from './styles'

import GameInfo from '@/components/GameInfo'
import { GameInfoProps } from '@/components/GameInfo/types'

import GameDetails from '@/components/GameDetails'
import { GameDetailsProps } from '@/components/GameDetails/types'

import Gallery from '@/components/Gallery'
import { GalleryImageProps } from '@/components/Gallery/types'

import { GameCardProps } from '@/components/GameCard/types'
import { HighlightProps } from '@/components/Highlight/types'

import TextContent from '@/components/TextContent'
import Base from '../Base'
import Showcase from '@/components/Showcase'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingGames,
  upcommingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>

      <Showcase
        title="Upcomming"
        games={upcommingGames}
        highlight={upcommingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)

export default Game