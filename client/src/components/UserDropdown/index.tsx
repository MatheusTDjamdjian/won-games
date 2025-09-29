import React from 'react'
import * as S from './styles'

import Image from 'next/image'
import { ChevronDown } from 'styled-icons/boxicons-regular'

import Dropdown from '../Dropdown'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <Image
                      src="/img/icons/perfil.png"
                      alt="Account icon"
                      width={24}
                      height={24}
                      style={{ filter: 'invert(1)' }}
        />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <S.Link href="/profile/me">
        <Image
                    src="/img/icons/perfil.png"
                    alt="Account icon"
                    width={24}
                    height={24}
        />
        <span>My profile</span>
      </S.Link>
      <S.Link href="/wishlist" title="Wishlist">
        <Image
            src="/img/icons/favorite2.png"
            alt="favorite border"
              width={24}
              height={24}
          />
        <span>Wishlist</span>
      </S.Link>

      <S.Link href="/logout" title="Sign out">
      <Image
        className="icon"
        src="/img/icons/sign-out.png"
        alt="logout"
        width={24}
        height={24}
      />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
