import styled, { css } from 'styled-components';
import { LogoProps } from './types';
import media from 'styled-media-query'

const wrapperModifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,

  hideOnMobile: () => css`
    ${media.lessThan('medium')`
        width: 5.8rem;
        height: 4.5rem;

        svg {
            height: 4.5rem;
        }

        .text {
            display: none;
        }
    `}
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size, $hideOnMobile }) => css`
    color: ${color === 'black' ? '#030517' : '#FAFAFA'};
    
    ${!!size && wrapperModifiers[size]}
    ${!!$hideOnMobile && wrapperModifiers.hideOnMobile}
  `}
`;
