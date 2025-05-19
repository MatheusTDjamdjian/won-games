import React from 'react'
import * as S from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({label, labelFor = '', labelColor = 'white'}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input id={labelFor} type="checkbox" />
    {!! label && <S.Label htmlFor={labelFor} labelColor={labelColor}>{label}</S.Label>}
  </S.Wrapper>
)

export default Checkbox