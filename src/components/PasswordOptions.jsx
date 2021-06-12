import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


function PasswordOptions(props) {

  const handleCheckboxChange = (event, newValue) => {
    props.updateSubSettings({
      [event.target.id]: newValue
    })
  }

  return(
    <React.Fragment>
    
      {/* A-Z */}
      <Grid 
        item 
        container 
        alignItems="center" 
        wrap="nowrap"
        xs={12} 
        sm={4} 
      >
        <Checkbox
          id="uppercase"
          defaultChecked
          color="primary" 
          onChange={handleCheckboxChange}
        />
        <Typography>A-Z</Typography>
      </Grid>


      {/* a-z */}
      <Grid 
        item 
        container 
        alignItems="center" 
        wrap="nowrap"
        xs={12} 
        sm={4} 
      >
        <Checkbox
          id="lowercase"
          defaultChecked
          color="primary" 
          onChange={handleCheckboxChange}
        />
        <Typography>a-z</Typography>
      </Grid>
    

      {/* 0-9 */}
      <Grid 
        item 
        container 
        alignItems="center" 
        wrap="nowrap"
        xs={12} 
        sm={4} 
      >
        <Checkbox
          id="numbers"
          defaultChecked
          color="primary"
          onChange={handleCheckboxChange} 
        />
        <Typography>0-9</Typography>
      </Grid>
      
    </React.Fragment>
  )
}

export default PasswordOptions