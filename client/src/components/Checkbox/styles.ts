import styled, { css } from 'styled-components'
import { CheckboxProps } from './types'

export const Wrapper = styled.main``

export const Label = styled.label<Pick<CheckboxProps, 'labelColor'>> `
    ${({ theme, labelColor }) => css `
        color: ${theme.colors[labelColor!]}
    `}
`