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
import {Typography} from '../../utils/typography';
import {Colors} from '../../utils/colors';
// components
import Input from '../../components/Input';
import Button from '../../components/Button';
import images from '../../utils/images';

const ForgotPasswordScreen = ({navigation}) => {
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
          Forgot Password?
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
          To reset your password, you need your email or mobile number that can
          be authenticated
        </Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 72,
          }}>
          <Image source={images.Forgot_Pass} />
        </View>
        <Input label={'Email'} placeholder={'Enter Email'} />
        <View style={{marginTop: 19}}></View>
        <Button
          title={'RESET PASSWORD'}
          backgroundColor={Colors.primary}
          onPress={() => {
            navigation.navigate('CheckEmailScreen');
          }}
        />
        <View style={{marginTop: 29}}></View>
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

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F9F9F9',
  },
});
