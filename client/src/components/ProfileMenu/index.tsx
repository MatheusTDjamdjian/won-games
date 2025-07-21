import React from 'react'
import NextLink from 'next/link'
import * as S from './styles'
import { ProfileMenuProps } from './types'

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <NextLink href="/profile/me" passHref>
      <S.Link isActive={activeLink === '/profile/me'} title="My profile">
        <img
          className="icon"
          src="/img/icons/perfil.png"
          alt="Account icon"
          width={24}
          height={24}
        />
        <span>My profile</span>
      </S.Link>
    </NextLink>

    <NextLink href="/profile/cards" passHref>
      <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <img
          className="icon"
          src="/img/icons/credit-card.png"
          alt="cards"
          width={24}
          height={24}
        />
        <span>My cards</span>
      </S.Link>
    </NextLink>

    <NextLink href="/profile/orders" passHref>
      <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <img
          className="icon"
          src="/img/icons/list.png"
          alt="orders"
          width={24}
          height={24}
        />
        <span>My orders</span>
      </S.Link>
    </NextLink>

    <NextLink href="/logout" passHref>
      <S.Link>
        <img
          className="icon"
          src="/img/icons/sign-out.png"
          alt="logout"
          width={24}
          height={24}
        />
        <span>Sign out</span>
      </S.Link>
    </NextLink>
  </S.Nav>
)

export default ProfileMenu