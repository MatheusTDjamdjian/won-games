import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  (Story, context) => {
    const currentTheme = context.globals.theme || 'Won Dark'

    const bgColor =
      currentTheme === 'Won Dark' ? theme.colors.mainBg : theme.colors.white

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg={false} bgColor={bgColor} />
        <Story />
      </ThemeProvider>
    )
  }
]

export const parameters = {
  themes: {
    default: 'Won Dark',
    list: [
      {
        name: 'Won Light',
        color: theme.colors.white
      },
      {
        name: 'Won Dark',
        color: theme.colors.mainBg
      }
    ]
  },
  viewport: {
    viewports: {
      desktopLarge: {
        name: 'Desktop Large',
        styles: {
          width: '1400px', // ativa arrows
          height: '800px'
        }
      },
      desktop: {
        name: 'Desktop padrão',
        styles: {
          width: '1200px',
          height: '800px'
        }
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '1024px',
          height: '800px'
        }
      },
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '800px'
        }
      }
    },
    defaultViewport: 'desktopLarge' // inicia já no maior para ver o slider funcionando
  }
}

export default {
  decorators,
  parameters
}
