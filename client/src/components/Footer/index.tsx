import Link from 'next/link'
import Heading from '../Heading'
import Logo from '../Logo'
import * as S from './styles'
import React, { useEffect, useState } from 'react'

  const Footer = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Follow us
          </Heading>

          <nav aria-labelledby="social media">
            <a
              href="https://www.instagram.com/tasso_theus"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.twitter.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.youtube.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/won-games"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        {isClient && (
          <S.Column>
            <Heading
              color="black"
              lineColor="secondary"
              lineBottom
              size="small"
            >
              Links
            </Heading>

            <nav aria-labelledby="footer resources">
              <Link href="/">Home</Link>
              <Link href="/games">Store</Link>
              <Link href="/search">Buscar</Link>
            </nav>
          </S.Column>
        )}

        <S.Column aria-labelledby="footer-contact">
          <Heading
            color="black"
            lineColor="secondary"
            lineBottom
            size="small"
          >
            Location
          </Heading>
          <span>Lorem ipsum dolor sit.</span>
          <span>Lorem Ipsum</span>
          <span>Lorem, ipsum dolor.</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2025 © All rights reserved.</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
