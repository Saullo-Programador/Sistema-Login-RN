import React from 'react'
import { Router } from './src/Routes/Router'
import { AuthProvider } from './src/Context/Auth'
import { ThemeProvider } from 'styled-components/native'

const App = () => {
  return (
    <ThemeProvider 
      theme={{
        colors:{
          background: '#000000',
          primary: '#550AB1'
        },
    }}>
      <AuthProvider>
        <Router/>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App