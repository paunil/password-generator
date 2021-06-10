import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'

function PasswordField() {
  return(
    <React.Fragment>

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

    </React.Fragment>
  )
}

export default PasswordField