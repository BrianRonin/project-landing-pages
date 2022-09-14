import React from 'react'
import { ThemeProvider } from 'styled-components'

import { createRoot } from 'react-dom/client'
const rootElement = document.getElementById('root')
const root = createRoot(rootElement!)
import { GlobalStyles } from './styles/global-styles'
import { theme } from './styles/theme'
import App from './templates/Home/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

root.render(
  <React.Suspense>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.Suspense>,
)
