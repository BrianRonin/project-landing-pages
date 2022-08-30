import React from 'react'
import { ThemeProvider } from 'styled-components'

import { createRoot } from 'react-dom/client'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)

import { GlobalStyles } from './styles/global-styles'
import { theme } from './styles/theme'
import App from './templates/Home/index'

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
