import React from 'react'
import { screen } from '@testing-library/react'
import '@testing-library/jest-dom';

import Home from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home />)

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})