import styled, { css, DefaultTheme } from 'styled-components'
import { TextFieldProps } from './types'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>

type WrapperProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.spacings.medium};
    height: ${theme.spacings.medium};
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    svg, img {
      width: 2rem;
      height: 2rem;
      object-fit: contain;
    }
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
        error: (theme: DefaultTheme) => css`
        ${InputWrapper} {
        border-color: ${theme.colors.red};
        }

        ${Icon},
        ${Label} {
        color: ${theme.colors.red};
        }
    `,
    disabled: (theme: DefaultTheme) => css`
        ${Label},
        ${Input},
        ${Icon} {
        cursor: not-allowed;
        color: ${theme.colors.gray};

        &::placeholder {
            color: currentColor;
        }
        }
    `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, error, disabled }) => css`
    ${error && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`