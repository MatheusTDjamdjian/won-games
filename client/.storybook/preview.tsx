import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg={false} /> {/* NÃO remover o background, deixe o Storybook aplicar */}
      <Story />
    </ThemeProvider>
  )
]

const preview = {
  parameters: {
    backgrounds: {
      default: 'won-dark',
      values: [
        { name: 'won-light', value: theme.colors.white },
        { name: 'won-dark', value: theme.colors.mainBg }
      ]
    }
  }
}

export default preview