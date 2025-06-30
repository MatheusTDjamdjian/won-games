import React from 'react'
import { render, screen } from '@testing-library/react'

import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {

    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()
  })
})