import React, { useState } from 'react'
import * as S from './styles'
import { CheckboxProps } from './types'

const Checkbox = ({
  onCheck, 
  label, 
  labelFor = '', 
  labelColor = 'white'
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <S.Wrapper>
      <S.Input id={labelFor} type="checkbox" onChange={onChange} checked={checked} />
      {!! label && <S.Label htmlFor={labelFor} labelColor={labelColor}>{label}</S.Label>}
    </S.Wrapper>
)}

export default Checkbox