import React from 'react'
import TextField from '@material-ui/core/TextField'
import Slider from '@material-ui/core/Slider'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'


function LengthSelector(props) {

  // update length setting based on textfield value
  const handleInputChange = (event) => {
    const newValue = event.target.value === '' ? '' : Number(event.target.value)
    props.updateSubSettings({
      length: newValue
    })
  }

  // update length setting based on slider value
  const handleSliderChange = (event, newValue) => {
    props.updateSubSettings({
      length: newValue
    })
  }

  // normalize value on bad input
  const handleBlur = () => {
    if (props.passwordSettings.length < 0) {
      props.updateSubSettings({
        length: 0
      })
    } else if (props.passwordSettings.length > 30) {
      props.updateSubSettings({
        length: 30
      })
    }
  }


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
          onChange={handleInputChange}
          value={props.passwordSettings.length}
          onBlur={handleBlur}
          type="number"
          inputProps={{
            step: 1,
            min: 0,
            max: 30,
            'aria-labelledby': 'input-slider'
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
          min={0}
          max={30}
          value={typeof props.passwordSettings.length === 'number' ? props.passwordSettings.length : 0}
          onChange={handleSliderChange}
          aria-labelledby="input-slider"
        />
      </Grid>

    </Grid>
  )
}

export default LengthSelector