import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import Menu from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu/>)

    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getAllByLabelText(/shopping cart/i)).toHaveLength(2)
  });


  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu/>)

    // 1. selecionar o MenuFull
    const fullMenuElement = screen.getByRole('navigation', {hidden: true})

    // 2. verificar se o menu tá escondido 
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // 3. clicar no botão e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i)) 
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // 4. clicar no botão e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i)) 
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

  });

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu/>)

    expect(screen.getAllByText(/my profile/i)).toHaveLength(2)
    expect(screen.getAllByText(/wishlist/i)).toHaveLength(2)
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2)
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
  });

  it('should show wishlight and account when logged in', () => {
    renderWithTheme(<Menu username="will"/>)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  });
})