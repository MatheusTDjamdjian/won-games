'use client'
import React, { forwardRef } from 'react'
import * as S from './styles'

import { ButtonProps } from './types'

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    icon,
    size = 'medium',
    $fullWidth = false,
    $minimal = false,
    ...props
  },
  ref
) => (
  <S.Wrapper size={size} $fullWidth={$fullWidth} $hasIcon={!!icon} $minimal={$minimal} ref={ref} {...props}>
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)