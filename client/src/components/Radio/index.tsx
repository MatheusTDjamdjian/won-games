import React, { useCallback } from 'react'
import * as S from './styles'
import { RadioProps } from './types'


const Radio = ({
  label,
  onCheck,
  $labelColor = 'white',
  labelFor = '',
  value,
  ...props
}: RadioProps) => {
  const onChange = useCallback(() => {
  if (onCheck) onCheck(value)
}, [onCheck, value])

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        value={value}
        onChange={onChange}
        {...props}
      />
      {!!label && (
        <S.Label $labelColor={$labelColor} htmlFor={labelFor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Radio