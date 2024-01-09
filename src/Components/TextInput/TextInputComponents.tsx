import React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'

export function TextInputComponents(props: TextInputProps) {
  const {colors} = useTheme();
  return (
    <TextInput
      placeholderTextColor="#727272" 
      style={[styles.input, {color: colors.onBackground, borderColor: colors.primary}]} 
      {...props}
    />
  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        paddingHorizontal: 8,
        color: '#000',
        borderWidth: 2,
        width: '100%',
        height: 60,
        marginBottom: 16, 
        fontSize: 20,
        paddingLeft: 20,
    }
})