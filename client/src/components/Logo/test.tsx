import { screen } from '@testing-library/react'
import React from 'react'

import Logo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Logo />', () => {
  it('should render the logo with id passed', () => {
    const { container } = renderWithTheme(<Logo id="myId" />)

    expect(container.querySelector('#paint_linear_myId')).toBeInTheDocument()
  })

  it('should render a white label by default', () => {
    // Renderizar o componente 'render'
    // Selecionar o elemento para ser testado 'screen' (queries)
    // expect - assertion - asserção - comparação - análise ( renderizar a logo)

    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       color: '#FAFAFA' 
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       color: '#030517' 
    })
  })

  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       width: '11rem' 
    })
  })

  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       width: '20rem' 
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWithTheme(<Logo $hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    )
  })
})