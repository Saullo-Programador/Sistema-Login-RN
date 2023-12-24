import React from 'react'
import { Text, View } from 'react-native'
import {styles} from '../../Global/Styles'
import { ButtonComponents } from '../../Components/Button/ButtonComponents'
import { useAuth } from '../../Context/Auth'

export const SettingScreen = () => {
  const {signOut} = useAuth()
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Configurações</Text>

        <ButtonComponents onPress={signOut} style={{backgroundColor: 'red'}} title='Sair Do App'/>
    </View>
  )
}
