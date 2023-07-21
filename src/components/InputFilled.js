import React from 'react';
import {StyleSheet, View, TextInput, Image} from 'react-native';

import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';

export const InputFilled = ({
  value = null,
  onChangeText = null,
  placeholder = null,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{
        borderWidth: 1, 
        borderColor: Colors.black,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}>
        <Image source={images.icon_search} style={{marginLeft:10, marginRight: 10}} />
      <TextInput
        style={[styles.input, {width: "85%"}]}
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
    padding: 10,
  },
});
