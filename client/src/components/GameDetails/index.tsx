import React from 'react'
import * as S from './styles'

import Heading from '@/components/Heading'
import MediaMatch from '@/components/MediaMatch'

import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import { GameDetailsProps, Platform } from './types'

const GameDetails = ({
  developer = 'Unknown',
  releaseDate,
  platforms = [],
  rating,
  genres = [],
  publisher = 'Unknown'
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  const formatRating = (r?: string) => {
    if (!r) return 'N/A'
    return r === 'BR0' ? 'FREE' : `${r.replace('BR', '')}+`
  }

  const formatDate = (date?: string) => {
    if (!date) return 'TBA'
    const parsed = new Date(date)
    return isNaN(parsed.getTime())
      ? 'TBA'
      : new Intl.DateTimeFormat('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }).format(parsed)
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
          <S.Description>{formatDate(releaseDate)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.length > 0
              ? platforms.map((icon: Platform) => (
                  <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
                ))
              : 'N/A'}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formatRating(rating)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.length > 0 ? genres.join(' / ') : 'N/A'}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
