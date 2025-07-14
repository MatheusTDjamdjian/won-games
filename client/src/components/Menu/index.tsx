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
        <Logo $hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch $greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search"/>
        </S.IconWrapper>
        <S.IconWrapper> 
          <img src="/img/icons/add-shopping-cart.png" alt="Open Shopping Cart" />
        </S.IconWrapper>
        {isClient && !username && (
          <MediaMatch $greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button>Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!$isOpen} $isOpen={$isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!username && (
            <>
            <S.MenuLink href="#">My account</S.MenuLink>
            <S.MenuLink href="#">Wishlist</S.MenuLink>
          </>
          )}
        </S.MenuNav>
        {isClient && !username && (
          <S.RegisterBox>
             <Link href="/sign-in" passHref>
              <Button $fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
             <Link href="/sign-up" passHref>
              <S.CreateAccount title="Sign Up">Sign Up</S.CreateAccount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
)}

export default Menu