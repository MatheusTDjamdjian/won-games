import React from 'react'
import { screen } from '@testing-library/react'

import GameCard from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://i.ibb.co/TB7mRjzj/landscapes-2887796-960-720-1.jpg',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })
})