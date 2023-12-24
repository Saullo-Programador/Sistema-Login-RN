import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { HomeScreen } from '../Screens/Home/HomeScreen';
import { SettingScreen } from '../Screens/Setting/SettingScreen';


const Stack = createNativeStackNavigator();
export  function AppStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='Settings' component={SettingScreen}/>
    </Stack.Navigator>
  )
}
