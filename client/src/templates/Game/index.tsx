import React from 'react'
import * as S from './styles'

import GameInfo from '@/components/GameInfo'
import { GameInfoProps } from '@/components/GameInfo/types'
import Base from '../Base'
import Gallery from '@/components/Gallery'
import { GalleryImageProps } from '@/components/Gallery/types'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
}

const Game = ({ cover, gameInfo, gallery }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
    </S.Main>
  </Base>
)

export default Game