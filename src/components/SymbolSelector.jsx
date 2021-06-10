import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'

function SymbolSelector() {
  return(
    <React.Fragment>

      <Checkbox
        defaultChecked
      />

      <TextField
        variant="outlined"
        size="small"
      />
      
    </React.Fragment>
  )
}

export default SymbolSelector