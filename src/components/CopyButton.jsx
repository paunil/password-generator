import React from 'react'
import Button from '@material-ui/core/Button'


function CopyButton() {
  return(
    <React.Fragment>

      <Button 
      variant="contained" 
      size="large"
      fullWidth={true} 
      >
        Copy
      </Button>
    
    </React.Fragment>
  )
}

export default CopyButton