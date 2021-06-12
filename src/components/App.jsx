import { React, useState } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Paper } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from "@material-ui/core/styles"
import TextField from '@material-ui/core/TextField'

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

  // refresh password
  const refreshPassword = () => {
    updateCurrentPassword(generatePassword(passwordSettings))
  }

  // update subset of settings
  const updateSubSettings  = (settings) => {
    const newSettings = {
      length: settings.length !== undefined ? settings.length : passwordSettings.length,
      uppercase: settings.uppercase !== undefined ? settings.uppercase : passwordSettings.uppercase,
      lowercase: settings.lowercase !== undefined ? settings.lowercase : passwordSettings.lowercase,
      numbers: settings.numbers !== undefined ? settings.numbers : passwordSettings.numbers,
      symbols: settings.symbols !== undefined ? settings.symbols : passwordSettings.symbols
    }
    updatePasswordSettings(newSettings)
    updateCurrentPassword(generatePassword(newSettings))
  }

  // update length setting based on textfield value
  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value)
    updateSubSettings({
      length: newValue
    })
  }

  // normalize value on bad input
  const handleBlur = () => {
    if (passwordSettings.length < 0) {
      updateSubSettings({
        length: 0
      })
    } else if (passwordSettings.length > 30) {
      updateSubSettings({
        length: 30
      })
    }
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

              {/* md-lengthselector + passwordfield + copybutton section */}
              <Grid 
                item 
                container 
                direction="row"
                xs={12} 
                spacing={1}
              >
                {/* variant of LengthSelector only seen on md-layout and up  */}
                <Hidden smDown>
                  <Grid 
                    item 
                    md={2}
                  >
                    <TextField
                      id="length-box-md"
                      variant="outlined"
                      size="medium"
                      fullWidth={true}
                      onChange={handleInputChange}
                      value={passwordSettings.length}
                      onBlur={handleBlur}
                      type="number"
                      inputProps={{
                        step: 1,
                        min: 0,
                        max: 30
                      }}
                    />
                  </Grid>
                </Hidden>

                {/* PasswordField */}
                <Grid     
                  item
                  xs={12}
                  sm={10}
                  md={8}
                >
                  <PasswordField 
                    currentPassword={currentPassword}
                    refreshPassword={refreshPassword}
                    updateSubSettings={updateSubSettings}
                    passwordSettings={passwordSettings}
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
                lg={8}
              >
                {/* LengthSelector hidden for md-layout and up */}
                <Hidden mdUp>
                    <LengthSelector 
                      updateSubSettings={updateSubSettings}
                      passwordSettings={passwordSettings}
                    />
                </Hidden>

                {/* PasswordOptions */}
                <Grid     
                  item
                  container
                  xs={12}
                  sm={8}
                  direction="row"
                >
                  <PasswordOptions />
                </Grid>
              
                {/* SymbolSelector */}
                <Grid     
                  item
                  xs={12}
                  sm={4}
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