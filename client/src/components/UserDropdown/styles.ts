import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;
    text-decoration: none;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
    text-decoration: none;
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none !important;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`