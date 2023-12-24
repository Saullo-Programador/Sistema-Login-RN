import React from 'react'
import { View, Text } from 'react-native'
import {styles} from '../../Global/Styles'
import { ButtonComponents } from '../../Components/Button/ButtonComponents'
import { useNavigation } from '@react-navigation/native'

export function HomeScreen() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Essa tela só pode ser vista por um usuario altenticado</Text>
      <ButtonComponents onPress={() => navigation.navigate('Settings')} title='Ir para as Configurações'/>
      <Text>
        by <Text style={styles.coffText}>Saullo</Text>
      </Text>
    </View>
  )
}
