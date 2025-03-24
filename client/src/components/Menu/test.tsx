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
    expect(screen.getByLabelText(/open shopping cart/i)).toBeInTheDocument()
  })


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

  })
})