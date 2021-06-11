import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'


function PasswordField() {
  return(
    <Grid 
      container 
      alignItems="center" 
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
            inputProps={{
              step: 1,
              min: 0,
              max: 30,
              type: 'number',
            }}
          />
        </Grid>
      </Hidden>


      {/* password field */}
      <Grid 
        item 
        xs={12} 
        md={10}
      >
        <TextField
          fullWidth={true}
          variant="outlined"
          InputProps={{
            endAdornment: 

            <IconButton aria-label="autorenew">

              <AutorenewIcon fontSize="large"/>

            </IconButton>

          }}
        />
      </Grid>

    </Grid>
  )
}

export default PasswordField