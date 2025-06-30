import React from 'react'
import * as S from './styles'

import GameInfo from '@/components/GameInfo'
import { GameInfoProps } from '@/components/GameInfo/types'

import GameDetails from '@/components/GameDetails'
import { GameDetailsProps } from '@/components/GameDetails/types'

import Base from '../Base'

import Gallery from '@/components/Gallery'
import { GalleryImageProps } from '@/components/Gallery/types'

import TextContent from '@/components/TextContent'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details
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
    </S.Main>
  </Base>
)

export default Game