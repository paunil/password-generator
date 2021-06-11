import React, { useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Paper } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"

import Header from './Header.jsx'
import CopyButton from './CopyButton.jsx'
import LengthSelector from './LengthSelector.jsx'
import PasswordField from './PasswordField.jsx'
import PasswordOptions from './PasswordOptions.jsx'
import SymbolSelector from './SymbolSelector.jsx'


// color palette
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#00c2cb"
    } 
  }
})

// makes header font size responsive
theme = responsiveFontSizes(theme, {
  breakpoints: ["sm", "md"],
  factor: 4,
  variants: ["h2"]
})

// generate a random password using settings
const generatePassword = (settings) => {
  let result = []
  let characters = (settings.uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '')
    + (settings.lowercase ? 'abcdefghijklmnopqrstuvwxyz' : '')
    + (settings.numbers ? '0123456789' : '')
    + settings.symbols;

  let charactersLength = characters.length
  for (var i = 0; i < settings.length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() *
      charactersLength)))
  }
  return result.join('')
}


function App() {  

  // use to determine password characters
  const [passwordSettings, updatePasswordSettings] = useState ({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: '!@$%^&'
  })

  // holds state of current password
  const [currentPassword, updateCurrentPassword] = useState(
    generatePassword(passwordSettings)
  )

  const refreshPassword = () => {
    updateCurrentPassword(generatePassword(passwordSettings))
  }


  return (
    <ThemeProvider theme={theme}>
      <Grid
        id="app-grid"
        container
        direction="row"
        justify="space-around"
        alignItems="stretch"
        spacing={1}
      >
        {/* normalize css */}
        <CssBaseline />


        {/* Header */}
        <Grid 
          item
          xs={12}
        >
          <Header />
        </Grid>


        {/* paper section */}
        <Grid 
          item xs={10} 
          md={7}
        >
          <Paper elevation={4}>
            <Grid 
              container 
              justify="center" 
              alignItems="center"
            >

              {/* passwordfield + copybutton section */}
              <Grid 
                item 
                container 
                direction="row" 
                xs={12} 
                spacing={1}
              >
                {/* PasswordField */}
                <Grid     
                  item
                  xs={12}
                  sm={10}
                >
                  <PasswordField 
                    currentPassword={currentPassword}
                    refreshPassword={refreshPassword}
                  />
                </Grid>
                
                {/* CopyButton */}
                <Grid     
                  item
                  xs={12}
                  sm={2}
                >
                  <CopyButton currentPassword={currentPassword}/>
                </Grid>
              </Grid>


              {/* options sections */}
              <Grid 
                id="custom-options"
                item 
                container
                justify="center"
                xs={12} 
                sm={10} 
              >
                {/* LengthSelector hidden for md-layout and up */}
                <Hidden mdUp>
                    <LengthSelector />
                </Hidden>

                {/* PasswordOptions */}
                <Grid     
                  item
                  container
                  xs={12}
                  sm={6}
                  direction="row"
                >
                  <PasswordOptions />
                </Grid>
              
                {/* SymbolSelector */}
                <Grid     
                  item
                  xs={12}
                  sm={6}
                >
                  <SymbolSelector />
                </Grid>
              </Grid>

            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default App