'use client'
import React from 'react'
import * as S from './styles'
import { useState } from 'react'
import Logo from '../Logo'

import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import ShoppingCart from '../GameCard/icons/shopping_cart.png'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import MediaMatch from '../MediaMatch'
import Button from '../Button'

export type MenuProps = {
  username?: string
}

const Menu = ({ username } : MenuProps) => {
  const [$isOpen, setIsOpen] = useState(false)

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
          <img src={ShoppingCart.src} alt="Open Shopping Cart" />
        </S.IconWrapper>
        {!username && (
          <MediaMatch $greaterThan="medium">
            <Button>Sign in</Button>
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
        {!username && (
          <S.RegisterBox>
            <Button $fullWidth size="large">
              Log in now
            </Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
)}

export default Menu