import React from 'react'

import { Container } from '.'
import theme from '@/styles/theme'
import { renderWithTheme } from '@/utils/tests/helpers'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Container><span>Won Games</span></Container>)

    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchInlineSnapshot()
  })
})