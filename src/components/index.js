import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from '../styles/theme'
import Navigation from './navigation'
import Form from './form'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Navigation />
          <Form />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App
