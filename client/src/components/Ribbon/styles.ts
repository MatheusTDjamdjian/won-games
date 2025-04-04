import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'
import { RibbonColors, RibbonProps } from '.'

const wrapperModifiers = {
    color: (theme: DefaultTheme, color: RibbonColors) => css`
        background-color: ${theme.colors[color]}
    `,

    normal: (theme: DefaultTheme) => css`
        font-size: ${theme.font.sizes.small};
        height: 3.6rem;
        `,

    small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 2.6rem;
    `,
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
    ${({ theme, color, size }) => css`
        ${!!size && wrapperModifiers[size](theme)}
        ${!!color && wrapperModifiers.color(theme, color)}
    `}
`