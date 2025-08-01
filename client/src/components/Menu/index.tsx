'use client'
import React, { useEffect } from 'react'
import * as S from './styles'
import Link from 'next/link'
import { useState } from 'react'
import Logo from '../Logo'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import MediaMatch from '../MediaMatch'
import Button from '../Button'
import CartDropdown from '../CartDropdown'
import CartIcon from '../CartIcon'
import UserDropdown from '../UserDropdown'

import { MenuProps } from './types'



const Menu = ({ username } : MenuProps) => {
  const [$isOpen, setIsOpen] = useState(false)
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <S.Wrapper>
      <MediaMatch $lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}> 
          <MenuIcon aria-label="Open Menu"/>
        </S.IconWrapper>
      </MediaMatch>
      <S.LogoWrapper>
        <Link href="/" legacyBehavior>
          <Logo $hideOnMobile />
        </Link>
      </S.LogoWrapper>
      <MediaMatch $greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>
      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search"/>
        </S.IconWrapper>
        <S.IconWrapper> 
          <MediaMatch $greaterThan="medium">
            <CartDropdown/>
          </MediaMatch>
          <MediaMatch $lessThan="medium">
            <Link href="/cart">
                <CartIcon/>
            </Link>
          </MediaMatch>
        </S.IconWrapper>
          <MediaMatch $greaterThan="medium">
        { isClient && !username ? (
            <Link href="/sign-in" passHref legacyBehavior>
              <Button>Sign in</Button>
            </Link>
        ) : (<UserDropdown username={username as string} />)}
        </MediaMatch>
      </S.MenuGroup>
      <S.MenuFull aria-hidden={!$isOpen} $isOpen={$isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <Link href="/" passHref legacyBehavior>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref legacyBehavior>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
          {!!username && (
            <>
            <Link href="/profile/me" passHref legacyBehavior>
              <S.MenuLink>My profile</S.MenuLink>
            </Link>
            <Link href="/profile/wishlist" passHref legacyBehavior>
              <S.MenuLink>Wishlist</S.MenuLink>
            </Link>
          </>
          )}
        </S.MenuNav>
        {isClient && !username && (
          <S.RegisterBox>
             <Link href="/sign-in" passHref legacyBehavior>
              <Button $fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
             <Link href="/sign-up" passHref legacyBehavior>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );}

export default Menu