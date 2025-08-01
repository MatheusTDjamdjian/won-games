import React, { useEffect, useState } from 'react'
import * as S from './styles'
import Link from 'next/link'

import Logo from '@/components/Logo'
import Heading from '@/components/Heading'
import { AuthProps } from './types'

const Auth = ({ title, children }: AuthProps) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <S.Wrapper>
      <S.BannerBlock>
        {isClient && (
          <S.BannerContent>
            <Link href="/" legacyBehavior>
              <Logo id="banner" />
            </Link>

            <div>
              <Heading size="huge">
                All your favorite games in one place
              </Heading>
              <S.Subtitle>
                <strong>WON</strong> is the best and most complete gaming platform.
              </S.Subtitle>
            </div>

            <S.Footer>
              Won Games 2025 © Todos os Direitos Reservados
            </S.Footer>
          </S.BannerContent>
        )}
      </S.BannerBlock>
      <S.Content>
        {isClient && (
          <S.ContentWrapper>
            <Link href="/" legacyBehavior>
              <Logo id="content" color="black" size="large" />
            </Link>
            <Heading color="black" lineColor="secondary" lineLeft>
              {title}
            </Heading>

            {children}
          </S.ContentWrapper>
        )}
      </S.Content>
    </S.Wrapper>
  );
}

export default Auth