import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInputComponents } from '../../Components/TextInput/TextInputComponents'
import { ButtonComponents } from '../../Components/Button/ButtonComponents'
import { useAuth } from '../../Context/Auth'
import { Container } from './styles'


export function SignInScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  return (
    <Container>

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
