import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./theme.js"
import MainPage from "./pages/MainPage"
import React from 'react'

const App = () => {
  return ( 
    <MuiThemeProvider theme={theme}>
      <MainPage />
    </MuiThemeProvider>
  )
}
export default App
