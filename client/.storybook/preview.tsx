import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  (Story, context) => {
    // pega o tema selecionado no painel
    const currentTheme = context.globals.theme || 'Won Dark'

    // define a cor de fundo conforme o tema
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

export const preview = {
  themes: {
    default: 'Won Dark',
    list: [
      {
        name: 'Won Light',
        color: theme.colors.white,
      },
      {
        name: 'Won Dark',
        color: theme.colors.mainBg,
      },
    ],
  },
}

export default preview