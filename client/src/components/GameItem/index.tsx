import React from 'react'
import * as S from './styles'

import { GameItemProps } from './types'

const GameItem = ({ img, title, price, downloadLink }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              
            <S.DownloadIcon src="/img/icons/download.png" alt={`Download ${title}`} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
)

export default GameItem