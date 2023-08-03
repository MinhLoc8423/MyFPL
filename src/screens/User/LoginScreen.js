import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useContext, useState } from 'react';

//Context
import { UserContext } from '../../Context/UserContext'

// utils
import {Typography} from '../../utils/typography';
import {Colors} from '../../utils/colors';
import images from '../../utils/images';
// components
import Input from '../../components/Input';
import Button from '../../components/Button';

const LoginScreen = (props) => {
  const { navigation } = props;
  const { onLogin } = useContext(UserContext);
  const [email, setEmail] = useState('locvmps22446@fpt.edu.vn');
  const [password, setPassword] = useState('1234');
 

  const onLoginPress = async () => {
    const result = await onLogin(email, password);
    console.log(result)
    if (!result) {
      Alert.alert('Login failed!');
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 80,
            marginBottom: 44,
            width: Dimensions.get('window').width - 60,
            height: 119,
          }}>
          <Image
            source={images.logo}
            style={{width: '100%', height: '100%'}}
            resizeMode="contain"
          />
        </View>
        <Input
          value={email}
          onChangeText={setEmail}
          label={'Email'}
          placeholder={'Enter Email'}
        />
        <Input
          value={password}
          onChangeText={setPassword}
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
        <Button
          title={'LOGIN'}
          backgroundColor={Colors.primary}
          onPress={onLoginPress}
        />
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
