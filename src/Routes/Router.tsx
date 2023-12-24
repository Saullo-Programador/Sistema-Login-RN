import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { useAuth } from '../Context/Auth';
import { View, Text } from 'react-native';

export function Router() {
  const {authData, loading} = useAuth();
  if (loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> Carregando Aplicativo... </Text>
      </View>
    )
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack/> : <AuthStack/>}
    </NavigationContainer>
  )
}
