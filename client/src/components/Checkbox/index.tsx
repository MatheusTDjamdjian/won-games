import React from 'react'
import * as S from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({label, labelFor = ''}: CheckboxProps) => (
  <S.Wrapper>
    <input id={labelFor} type="checkbox" />
    {!! label && <label htmlFor={labelFor}>{label}</label>}
  </S.Wrapper>
)

export default Checkbox