import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Grid, Paper } from '@material-ui/core'
import Hidden from '@material-ui/core/Hidden'

import Header from './Header.jsx'
import CopyButton from './CopyButton.jsx'
import LengthSelector from './LengthSelector.jsx'
import PasswordField from './PasswordField.jsx'
import PasswordOptions from './PasswordOptions.jsx'
import SymbolSelector from './SymbolSelector.jsx'


function App() {
  return (
    <Grid
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
                <PasswordField />
              </Grid>
              
              {/* CopyButton */}
              <Grid     
                item
                xs={12}
                sm={2}
              >
                <CopyButton />
              </Grid>
            </Grid>


            {/* options sections */}
            <Grid 
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
  )
}

export default App