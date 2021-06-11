import React from 'react'
import Typography from '@material-ui/core/Typography'


function Header() {
  return(
    <React.Fragment>

      <Typography 
        align="center" 
        variant="h2"
        style={{margin: "8% 0% 4% 0%", color: "white"}}
      >
        Password Generator
      </Typography>

    </React.Fragment>
  )
}

export default Header