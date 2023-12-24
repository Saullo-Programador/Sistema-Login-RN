import React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'

export const TextInputComponents = (props: TextInputProps) => {
  return (
    <TextInput
    placeholderTextColor="#727272" style={styles.input} {...props}/>
  )
}

const styles = StyleSheet.create({
    input: {
        borderRadius: 8,
        borderColor: '#1d013f',
        paddingHorizontal: 8,
        color: '#000',
        borderWidth: 1,
        width: '80%',
        height: 50,
        marginBottom: 16, 
        fontSize: 20,
    }
})