import React from 'react';
import {Text, StyleSheet, TouchableOpacityProps, TouchableOpacity} from 'react-native';
import { useTheme } from 'styled-components';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function ButtonComponents({title, style, ...rest}: MyButtonProps) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity {...rest} style={[styles.button, style, {backgroundColor: colors.primary}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 20,
  },
  button: {
    borderRadius: 12,
    padding: 18,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});