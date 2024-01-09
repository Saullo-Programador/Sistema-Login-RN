import React, { useContext, useState } from 'react'
import { View, Text, Switch } from 'react-native'
import { TextInputComponents } from '../../Components/TextInput/TextInputComponents'
import { ButtonComponents } from '../../Components/Button/ButtonComponents'
import { useAuth } from '../../Context/Auth'
import { Container } from './styles'
import { ThemeContext, ThemeType } from '../../Themes/theme'


export function SignInScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {toggleTheme , theme} = useContext(ThemeContext)

  const isDarkMode = theme === ThemeType.dark

  return (
    <Container>
      <Switch 
        value={isDarkMode} 
        onValueChange={toggleTheme} 
      />
      <TextInputComponents 
        placeholder='E-mail' 
        value={email} 
        onChangeText={setEmail}
      />

      <TextInputComponents 
        placeholder='Senha' 
        value={password} 
        onChangeText={setPassword}
      />

      <ButtonComponents onPress={() => signIn(email, password)} title='Entrar no App'/>
      
    </Container>
  )
}
