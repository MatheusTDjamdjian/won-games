import theme from '../styles/theme'

// inferência de tipos
type Theme = typeof theme

declare module 'styled-components' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface DefaultTheme extends Theme {}
}   