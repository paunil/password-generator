import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Typography from '@material-ui/core/Typography'

function PasswordOptions() {
  return(
    <React.Fragment>
    
      <Checkbox
        defaultChecked
      />
      <Typography>A-Z</Typography>

      <Checkbox
        defaultChecked
      />
      <Typography>a-z</Typography>
    
      <Checkbox
        defaultChecked
      />
      <Typography>0-9</Typography>
      
    </React.Fragment>
  )
}

export default PasswordOptions