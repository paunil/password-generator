import React from 'react'
import Button from '@material-ui/core/Button'


function CopyButton() {
  return(
    <React.Fragment>

      <Button 
        id="copy-button" 
        variant="contained" 
        size="large"
        fullWidth={true}
        style={{color:"white"}}
        color="primary" 
      >
        Copy
      </Button>
    
    </React.Fragment>
  )
}

export default CopyButton