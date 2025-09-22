import React from 'react'
import { screen } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from '@/utils/tests/helpers'
import AddShoppingCart from '../GameCard/icons/add_shopping_cart.png'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size by default', () => {
    renderWithTheme(<Button size="small">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size by default', () => {
    renderWithTheme(<Button size="large">Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem',
    })
  })

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button $fullWidth>Buy Now</Button>)

    expect(screen.getByRole('button', { name: /Buy Now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render a minimal version', () => {
    renderWithTheme(<Button icon={<img src={AddShoppingCart.src} data-testid="icon" />} $minimal>
      Buy Now
    </Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      bakcground: 'none',
      color: '#F231A5'
    })

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule('background', 'none', { modifier: 'hover'})

  })

  it('should render a disabled Button', () => {
    renderWithTheme(<Button disabled>Buy now</Button>)

    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      {
        modifier: ':disabled'
      }
    )
  })

  it('should render Button as a link', () => {
    const {debug, container} = renderWithTheme(
      <Button href="/link">Buy Now</Button>
    )

    debug(container)

    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})