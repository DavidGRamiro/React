import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { purpleTheme } from './purpleTheme'

export const AppTheme = ({ children  }) => {
  return (

    <ThemeProvider theme={ purpleTheme }>
    <CssBaseline />
      {/* El children que renderizamos es nuestro JorunalApp. Es un High Order Component */}
      { children }
    </ThemeProvider>
  )
}

