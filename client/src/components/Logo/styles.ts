import styled, { css } from 'styled-components';
import { LogoProps } from './index';

const wrapperModifiers = {
  normal: () => css `
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css `
    width: 20rem;
    height: 5.9rem;
  `
};

export const Wrapper = styled.div<LogoProps>`
  ${({ color, size }) => css`
    color: ${color === 'black' ? '#030517' : '#FAFAFA'};
    ${!!size && wrapperModifiers[size]}
  `}
`;
