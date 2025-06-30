import React from 'react'
import * as S from './styles'

import GameInfo from '@/components/GameInfo'
import { GameInfoProps } from '@/components/GameInfo/types'
import Base from '../Base'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
}

const Game = ({ cover, gameInfo }: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>
    </S.Main>
  </Base>
)

export default Game