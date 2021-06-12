import React from 'react'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AutorenewIcon from '@material-ui/icons/Autorenew'


function PasswordField(props) {

  // manually edit password field
  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : event.target.value
    props.updateCurrentPassword(newValue)
  }

  return(
    <TextField
      value={props.currentPassword}
      fullWidth={true}
      onChange={handleInputChange}
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