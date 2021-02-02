import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: { 500: '#467fcf' },
  },
  typography: {
    fontFamily: '"Open Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightSemiBold: 500,
    fontWeightBold: 700,
    fontWeightBlack: 900,
    h1: {
      fontWeight: 500,
      fontSize: "32px",
    },
  }
})

export default theme;
