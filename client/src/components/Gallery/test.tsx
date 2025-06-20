import React from 'react'
import { render, screen } from '@testing-library/react'

import Gallery from '.'

describe('<Gallery />', () => {
  it('should render the heading', () => {
    const { container } = render(<Gallery {...props} />)

    expect(screen.getByRole('heading', { name: /Gallery/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})