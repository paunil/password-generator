import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'


function PasswordField(props) {

  return(
    <TextField
      value={props.currentPassword}
      fullWidth={true}
      variant="outlined"
      InputProps={{
        endAdornment: 

        <IconButton 
          aria-label="autorenew"
          onClick={props.refreshPassword}
        >

          <AutorenewIcon fontSize="inherit"/>

        </IconButton>

      }}
    />
  )
}

export default PasswordField