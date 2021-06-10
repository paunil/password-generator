import React from 'react'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'


function LengthSelector() {
  return(
    <Grid
      item 
      container 
      direction="row" 
      alignItems="center" 
      xs={12} 
      spacing={2}
    >

      {/* length text only seen on sm-layout */}
      <Hidden xsDown>
        <Grid 
          item 
          xs={2}
        >
          <Typography>Length</Typography>
        </Grid>
      </Hidden>
   

      {/* length input field */}
      <Grid 
        item 
        xs={4} 
        sm={2}
      >
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
      </Grid>


      {/* length slider */}
      <Grid 
        item 
        xs={8}
      >
        <Slider 
          id="slider" 
          max={30}
          aria-labelledby="input-slider"
        />
      </Grid>

    </Grid>
  )
}

export default LengthSelector