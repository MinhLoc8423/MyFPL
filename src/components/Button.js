import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '../utils/colors';
import { Typography } from '../utils/typography';

export const Button = ({ title, onPress, width, height }) => {
  return (
    <Pressable style={[styles.button,{ width: width, height: height}]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.Primary.primary_600,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  buttonText: {
    color: Colors.white,
    ...Typography.textMedium,
  },
});
