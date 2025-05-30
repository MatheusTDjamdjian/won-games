import React from 'react'
import * as S from './styles'

import Logo from '@/components/Logo'
import Heading from '@/components/Heading'
import { AuthProps } from './types'

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Logo/>

      <Heading>
        All your favorite games in one place
      </Heading>
      <S.SubTitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.SubTitle>

      <S.Footer>
        WOn Games 2025 © Todos os Direitos Reservados
      </S.Footer>
    </S.BannerBlock>
    <S.Content>
      <Logo color='black' size='large'/>
      <Heading color='black' lineColor='secondary' lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth