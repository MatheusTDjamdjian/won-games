import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as S from './styles'

const ProfileMenu = () => (
  <S.Nav>
    <Link href="/profile/me" passHref>
      <S.Link>
        <Image
          src="/img/icons/perfil.png"
          alt="Account icon"
          width={24}
          height={24}
        />
        <span>My profile</span>
      </S.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <S.Link>
        <Image
          src="/img/icons/credit-card.png"
          alt="cards"
          width={24}
          height={24}
        />
        <span>My cards</span>
      </S.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <S.Link>
        <Image
          src="/img/icons/list.png"
          alt="orders"
          width={24}
          height={24}
        />
        <span>My orders</span>
      </S.Link>
    </Link>

    <Link href="/logout" passHref>
      <S.Link>
        <Image
          src="/img/icons/sign-out.png"
          alt="logout"
          width={24}
          height={24}
        />
        <span>Sign out</span>
      </S.Link>
    </Link>
  </S.Nav>
)

export default ProfileMenu