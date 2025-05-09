import React from 'react'
import { screen } from '@testing-library/react'
import '../../../.github/workflows/.jest/match-media-mock'

import BannerSlider from '.'
import { renderWithTheme } from '@/utils/tests/helpers'

const items = [
  {
    img: 'https://img.freepik.com/fotos-gratis/morskie-oko-em-tatry_1204-510.jpg?t=st=1744648920~exp=1744652520~hmac=3f8a60e4f44202a56f58f8bdc45b092a016bfc9731d44feeb3202ae016c2eac9&w=996',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://img.freepik.com/fotos-gratis/bela-foto-de-colinas-gramadas-cobertas-por-arvores-perto-de-montanhas-nas-dolomitas-italia_181624-24400.jpg?t=st=1744649756~exp=1744653356~hmac=0ed752810e6d6018aa39ec467b52fd8f3a0de1386a6177e4d9d354a9aa57a5f1&w=996',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()

  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-acive')).toHaveLength(1)

    expect(screen.getByRole('heading', { name: /defy death 1/i, hidden: false })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /defy death 2/i, hidden: true })).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})