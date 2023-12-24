import React from 'react'
import { Router } from './src/Routes/Router'
import { AuthProvider } from './src/Context/Auth'

const App = () => {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  )
}

export default App