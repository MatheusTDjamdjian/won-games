import React from 'react'
import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'
import 'match-media-mock'
import '@testing-library/jest-dom';

import Home from '.'
import bannerMock from '../../components/BannerSlider/mock'
import gamesMock from '../../components/GameCardSlider/mock'
import highlightMock from '../../components/Highlight/mock'

const props = {
  banners: bannerMock,
  newGames: gamesMock,
  mostPopularHighlight: highlightMock,
  mostPopularGames:gamesMock,
  upcommingGames: gamesMock,
  upcommingHighligth: highlightMock,
  upcommingMoreGames: gamesMock,
  freeGames: gamesMock,
  freeHighligth: highlightMock
}

jest.mock('components/Menu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Menu"></div>
    }
  }
})

jest.mock('components/Footer', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Footer"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

jest.mock('components/BannerSlider', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Banner Slider"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByTestId('Mock Menu')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Banner Slider')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(5)
    expect(screen.getByTestId('Mock Footer')).toBeInTheDocument()
  })
})