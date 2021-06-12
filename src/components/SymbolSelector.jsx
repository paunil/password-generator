import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { Grid } from '@material-ui/core'


function SymbolSelector() {
  return(
    <Grid
      item 
      container  
      wrap="nowrap"
      xs={12} 
    >

      <Checkbox
        defaultChecked
        color="primary"
      />

      <TextField
        variant="outlined"
        size="small"
        fullWidth={true}
      />

    </Grid>
  )
}

export default SymbolSelector