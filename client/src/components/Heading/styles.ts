import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { LineColors } from '.'
import { HeadingProps } from './types'

export const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
        width: 3rem;
    }
    `,

    medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
        font-size: ${theme.font.sizes.xxlarge};
    `}
    `,

    huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    `,

    lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
        padding-left: ${theme.spacings.xxsmall};
        border-left: 0.7rem solid ${theme.colors[lineColor]};
    `,

    lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};

    &::after {
        position: absolute;
        left: 0%;
        bottom: -1rem;
        content: '';
        width: 5rem;
        border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
    `
}

export const Wrapper = styled.h2.withConfig({
  shouldForwardProp: (prop) =>
    !['lineLeft', 'lineBottom', 'lineColor', 'size', 'color'].includes(prop)
})<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, lineColor = 'primary', size }) => css`
    color: ${theme.colors[color!]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor)}
    ${!!size && wrapperModifiers[size](theme)}
  `}
`