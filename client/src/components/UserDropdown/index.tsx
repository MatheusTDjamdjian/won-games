import React from 'react'
import * as S from './styles'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown } from 'styled-icons/boxicons-regular'

import Dropdown from '../Dropdown'
import { UserDropdownProps } from './types'

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <Image
                      src="/img/icons/perfil.png"
                      alt="Account icon"
                      width={24}
                      height={24}
        />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
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
      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <Image
              src="/img/icons/favorite.png"
              alt="favorite border"
                width={24}
                height={24}
            />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link title="Sign out">
        <Image
          className="icon"
          src="/img/icons/sign-out.png"
          alt="logout"
          width={24}
          height={24}
        />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown