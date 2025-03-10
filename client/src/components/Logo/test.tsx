import { screen } from '@testing-library/react'
import React from 'react'

import Logo from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // Renderizar o componente 'render'
    // Selecionar o elemento para ser testado 'screen' (queries)
    // expect - assertion - asserção - comparação - análise ( renderizar a logo)

    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       color: '#FAFAFA' 
    })
  })
})

describe('<Logo />', () => {
  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       color: '#030517' 
    })
  })
})

describe('<Logo />', () => {
  it('should render a normal logo when size is default', () => {
    renderWithTheme(<Logo/>)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       width: '11rem' 
    })
  })
})

describe('<Logo />', () => {
  it('should render a bigger logo', () => {
    renderWithTheme(<Logo size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
       width: '20rem' 
    })
  })
})