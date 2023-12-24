import React from 'react';
import {Text, StyleSheet, TouchableOpacityProps, TouchableOpacity} from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function ButtonComponents({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#550ab1',
    borderRadius: 12,
    padding: 20,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});