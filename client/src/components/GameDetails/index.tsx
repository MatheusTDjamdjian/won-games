import React from 'react'
import * as S from './styles'

import Heading from '@/components/Heading'
import MediaMatch from '@/components/MediaMatch'

import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import { GameDetailsProps, Platform } from './types'

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  rating,
  genres,
  publisher
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch $greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails