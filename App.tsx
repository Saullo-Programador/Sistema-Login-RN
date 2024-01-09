import React from 'react'
import { Router } from './src/Routes/Router'
import { AuthProvider } from './src/Context/Auth'
import { ThemeProvider } from './src/Themes/theme'


const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App