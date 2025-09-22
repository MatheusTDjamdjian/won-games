import React from 'react'
import * as S from './styles'

import Button from '../Button'
import Link from 'next/link'
import { EmptyProps } from './types'

const Empty = ({ title, description, $hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {$hasLink && (
      <Link href="/" passHref>
        <Button >Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty