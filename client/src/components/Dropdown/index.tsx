import React from 'react'
import { useState } from 'react'
import * as S from './styles'

import { DropdownProps } from './types'

const Dropdown = ({ title, children }: DropdownProps) => {
  const [$isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={$isOpen}>
      <S.Title onClick={() => setIsOpen(!$isOpen)}>{title}</S.Title>

      <S.Content aria-hidden={!$isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}

export default Dropdown