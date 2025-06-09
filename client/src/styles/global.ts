'use client'
import { createGlobalStyle, css } from 'styled-components';

interface GlobalStylesProps {
    removeBg?: boolean;
}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  body {
    background: ${({ removeBg }) => (removeBg ? 'transparent' : '#fff')};
  }

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

  ${({ removeBg }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

 ShowCas     font-size: 1.6rem;

      ${!removeBg &&
      css`
        background-color: #06092B;
      `}
    }
  `}
`;

export default GlobalStyles;
