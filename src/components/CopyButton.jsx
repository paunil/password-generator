import React from 'react'
import Button from '@material-ui/core/Button'
import copy from 'copy-to-clipboard'


function CopyButton(props) {
  return(
    <React.Fragment>

      <Button 
        id="copy-button" 
        variant="contained" 
        size="large"
        fullWidth={true}
        onClick={() => copy(props.currentPassword)}
        style={{color:"white"}}
        color="primary" 
      >
        Copy
      </Button>
    
    </React.Fragment>
  )
}

export default CopyButton