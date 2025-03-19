import { render, screen } from '@testing-library/react'
import React from 'react'
import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading', () => {
    const { container } = render(<Heading>Heading</Heading>)

    expect(screen.getByRole('heading', { name: /Heading/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
