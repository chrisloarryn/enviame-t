import React from 'react'
import { render } from 'react-dom'

import { ThemeProvider } from '@emotion/react'
import { theme } from 'Styles'

import App from './App'

import './index.css'

render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
