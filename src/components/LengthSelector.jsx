import React from 'react'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'

function LengthSelector() {
  return(
    <React.Fragment>
   
        <TextField 
          variant="outlined" 
          size="small" 
          fullWidth={true} 
          inputProps={{
            step: 1,
            min: 0,
            max: 30,
            type: 'number',
            'aria-labelledby': 'input-slider',
          }}
        />
   
        <Slider 
          id="slider" 
          max={30}
          aria-labelledby="input-slider"
        />
    
    </React.Fragment>
  )
}

export default LengthSelector