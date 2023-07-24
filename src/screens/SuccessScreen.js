import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

// utils
import {Typography} from '../utils/typography';
import {Colors} from '../utils/colors';
// components
import Input from '../components/Input';
import Button from '../components/Button';

const SuccessScreen = ({navigation}) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            ...Typography.title1,
            color: Colors.primary,
            textAlign: 'center',
            marginTop: 80,
          }}>
          Successfully
        </Text>
        <Text
          style={{
            ...Typography.textRegular,
            color: Colors.secondary,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 58,
            lineHeight: 18,
          }}>
          Your password has been updated, please change your password regularly
          to avoid this happening
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 72,
          }}>
          <Image
            source={require('../assets/images/SuccessEmail.png')}
            style={{width: 139, height: 117}}
          />
        </View>
        <View style={{marginTop: 15}}></View>
        <View style={{marginTop: 15}}></View>
        <Button
          title={'BACK TO LOGIN'}
          backgroundColor={Colors.primary}
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F9F9F9',
  },
});
