import React from 'react'
import Typography from '@material-ui/core/Typography'

function Header() {
  return(
    <React.Fragment>

      <Typography 
        align="center" 
        style={{margin: "10% 0% 4% 0%"}}
      >
        Password Generator
      </Typography>
      
    </React.Fragment>
  )
}

export default Header