'use client'
import { createGlobalStyle, css } from 'styled-components'

interface GlobalStylesProps {
  removeBg?: boolean
  bgColor?: string  // nova prop para cor do fundo
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  ${({ removeBg, bgColor }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    html {
      font-size: 62.5%;
    }

    body {
      font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 1.6rem;

      ${removeBg
        ? css`
            background: transparent;
          `
        : css`
            background-color: ${bgColor || '#06092B'};
          `}
    }
  `}
`

export default GlobalStyles
