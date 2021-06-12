import React from 'react'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { Grid } from '@material-ui/core'


function SymbolSelector(props) {

  const handleCheckboxChange = (event, newValue) => {
    props.updateSubSettings({
      [event.target.id]: newValue
    })
  }

  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : event.target.value
    props.updateSubSettings({
      symbols: newValue
    })
  }

  return(
    <Grid
      item 
      container  
      wrap="nowrap"
      xs={12} 
    >

      <Checkbox
        id="symbolsEnabled"
        defaultChecked
        onChange={handleCheckboxChange}
        color="primary"
      />

      <TextField
        variant="outlined"
        value={props.passwordSettings.symbols}
        onChange={handleInputChange}
        disabled={!props.passwordSettings.symbolsEnabled}
        size="small"
        fullWidth={true}
      />

    </Grid>
  )
}

export default SymbolSelector