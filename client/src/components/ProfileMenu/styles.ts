import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
    a {
      text-decoration: none !important; // reforça com prioridade
    }
    ${media.greaterThan('medium')`
      flex-direction: column;
      border: 0;

      a:not(:last-child) {
        border-bottom: 0.1rem solid ${theme.colors.lightGray};
      }
    `}
  `}
`

const linkModifiers = {
  default: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    `,

  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type LinkProps = {
  isActive?: boolean
}

export const Link = styled.a<LinkProps>`
  ${({ theme, isActive }) => css`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }
    
    .icon {
        transition: filter 0.3s ease;
    }

    &:hover .icon {
    filter: brightness(0) invert(1);
    transition: filter 0.3s ease;
    }
  
    > span {
      margin-left: ${theme.spacings.xsmall};
    }

    ${media.lessThan('medium')`
      justify-content: center;
      flex: 1;

      > span {
        display: none;
      }
    `}
    ${!isActive && linkModifiers.default(theme)};
    ${isActive && linkModifiers.active(theme)};
  `}
`