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

const CheckEmailScreen = ({navigation}) => {
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
          Check Your Email
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
          We have sent the reset password to the email address
          brandonelouis@gmial.com
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 72,
          }}>
          <Image source={require('../assets/images/CheckEmail.png')} />
        </View>
        <View style={{marginTop: 15}}></View>
        <Button
          title={'OPEN YOUR EMAIL'}
          backgroundColor={Colors.primary}
          onPress={() => {
            navigation.navigate('SuccessScreen');
          }}
        />
        <View style={{marginTop: 15}}></View>
        <Button
          title={'BACK TO LOGIN'}
          backgroundColor={Colors.pink}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CheckEmailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F9F9F9',
  },
});
