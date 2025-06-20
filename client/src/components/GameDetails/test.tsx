import React from 'react'
import { render, screen } from '@testing-library/react'

import GameDetails from '.'



describe('<GameDetails />', () => {
  it('should render the heading', () => {

    expect(screen.getByRole('heading', { name: /GameDetails/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})