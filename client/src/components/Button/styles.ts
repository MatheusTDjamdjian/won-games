import styled, { css } from 'styled-components'
import { ButtonProps } from './types'
import { DefaultTheme } from 'styled-components/dist/types'

export type WrapperProps = {
    $hasIcon: boolean
} & Pick<ButtonProps, 'size' | '$fullWidth' | '$minimal'>

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.sizes.xsmall}
    `,
    medium: (theme: DefaultTheme) => css`
        height: 4rem;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
    `,
    large: (theme: DefaultTheme) => css`
        height: 5rem;
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `,
    fullWidth: () => css`
        width: 100%;
    `,
    withIcon: (theme: DefaultTheme) => css`

        svg {
            width: 1.5rem;

            & + span {
                margin-left: ${theme.spacings.xsmall};
            }
        }
    `,
    minimal: (theme: DefaultTheme) => css`
        background: none;
        color: ${theme.colors.primary}
    `,
    disabled: () => css`
        &:disabled {
        cursor: not-allowed;
        filter: saturate(30%);
        }
    `
}

export const Wrapper = styled.button<WrapperProps> `
    ${({ theme, size, $fullWidth, $hasIcon, $minimal, disabled }) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
        color: ${theme.colors.white};
        border: none;
        cursor: pointer;
        border-radius: ${theme.border.radius};
        padding: ${theme.spacings.xxsmall};
        text-decoration: none;

        &:hover {
            background: ${$minimal ? 'none' : `linear-gradient(180deg, #e35565 0%, #d958a6 50%)`};
        }

        ${!!size && wrapperModifiers[size](theme)};
        ${!!$fullWidth && wrapperModifiers.fullWidth()};
        ${!!$hasIcon && wrapperModifiers.withIcon(theme)};
        ${!!$minimal && wrapperModifiers.minimal(theme)};
         ${disabled && wrapperModifiers.disabled()};
  `}
`