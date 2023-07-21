import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';

export const Input = ({
  width,
  height,
  value = null,
  onChangeText = null,
  placeholder = null,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{
        borderBottomWidth: 1, 
        borderBottomColor: Colors.Grey.grey_100,
      }}>
      <TextInput
        style={[styles.input, {width: width}, {height: height}]}
        value={value}
        placeholderTextColor={Colors.Grey.grey_500}
        secureTextEntry={secureTextEntry}
        onChangeaaText={onChangeText}
        placeholder={placeholder}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    ...Typography.textNormal,
    color: Colors.Grey.grey_500,
    paddingTop: 8,
    paddingRight: 12,
  },
});
