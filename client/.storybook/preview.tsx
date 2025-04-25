import React from 'react'
import GlobalStyles from '../src/styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../src/styles/theme'

export const decorators = [
  ( Story ) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg={true} />
      <Story/>
    </ThemeProvider>
  )
]

const preview = {
  parameters: {
    backgrounds: {
      values: [
        // 👇 Default values

        // 👇 Add your own
        { name: 'won-light', value: theme.colors.white },
        { name: 'won-dark', value: theme.colors.mainBg },
      ],
      // 👇 Specify which background is shown by default
      default: 'won-light',
    },
  },
};

export default preview