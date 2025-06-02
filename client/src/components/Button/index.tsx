'use client'
import React from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button = ({ children, size = 'small', $fullWidth = false,$minimal = false, icon, ...props }: ButtonProps) => (
  <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} $minimal={$minimal} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button