import styled, { css } from 'styled-components'
import { ButtonProps } from '.'
import { DefaultTheme } from 'styled-components/dist/types'

type WrapperProps = Pick<ButtonProps, 'size' | 'fullWidth'>

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
    `
}

export const Wrapper = styled.button<WrapperProps> `
    ${({ theme, size, fullWidth }) => css`
        background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
        color: ${theme.colors.white};
        border: none;
        border-radius: ${theme.border.radius};
        padding: ${theme.spacings.xxsmall};

        ${!!size && wrapperModifiers[size](theme)}
        ${!!fullWidth && wrapperModifiers.fullWidth()}
    `}
`