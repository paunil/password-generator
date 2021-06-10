import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Header from './Header.jsx'
import CopyButton from './CopyButton.jsx'
import LengthSelector from './LengthSelector.jsx'
import PasswordField from './PasswordField.jsx'
import PasswordOptions from './PasswordOptions.jsx'
import SymbolSelector from './SymbolSelector.jsx'

function App() {
  return (
    <React.Fragment>

      {/* normalize css */}
      <CssBaseline />

      <Header />
      <PasswordField />
      <CopyButton />
      <LengthSelector />
      <PasswordOptions />
      <SymbolSelector />
      
    </React.Fragment>
  )
}

export default App