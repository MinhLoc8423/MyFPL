import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

// utils
import {Typography} from '../../utils/typography';
import {Colors} from '../../utils/colors';
import images from '../../utils/images';
// components
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginScreen = ({navigation}) => {
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
          Welcome Back
        </Text>
        <Text
          style={{
            ...Typography.textRegular,
            color: Colors.secondary,
            textAlign: 'center',
            marginTop: 10,
            marginBottom: 64,
            lineHeight: 18,
          }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor
        </Text>
        <Input label={'Email'} placeholder={'Enter Email'} />
        <Input
          label={'Password'}
          placeholder={'Enter Password'}
          secureTextEntry={true}
        />
        <Text
          onPress={() => {
            navigation.navigate('ForgotPasswordScreen');
          }}
          style={{
            ...Typography.textRegular,
            color: Colors.secondary,
            textAlign: 'right',
            marginBottom: 16,
          }}>
          Forgot Password ?
        </Text>
        <Button title={'LOGIN'} backgroundColor={Colors.primary} />
        <View
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#D6CDFE',
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 19,
            alignItems: 'center',
          }}>
          <Image
            source={images.Icon_Google}
            style={{width: 20, height: 20, marginRight: 12}}
          />
          <Text style={{color: Colors.white, ...Typography.subheadBold}}>
            SIGN IN WITH GOOGLE
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#F9F9F9',
  },
});
