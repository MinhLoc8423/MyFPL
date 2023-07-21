import {
  Image,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

//utils
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';
import images from '../utils/images';
// component
import {Input} from '../components/Input';
import {Button} from '../components/Button';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={{
            ...Typography.title1,
            color: Colors.Grey.grey_900,
            textAlign: 'center',
            marginTop: 45,
          }}>
          Chào mừng trở lại!
        </Text>
        <Text
          style={{
            ...Typography.title1,
            color: Colors.Grey.grey_900,
            textAlign: 'center',
          }}>
          Đăng nhập để tiếp tục!
        </Text>
        <View style={{marginTop: 60}}></View>
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: Colors.Grey.grey_50,
            borderRadius: 6,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={images.iconGG} style={{marginLeft: 30}} />
          <Text
            style={{
              ...Typography.textBold,
              color: Colors.Grey.grey_900,
              textAlign: 'center',
              marginLeft: 30,
            }}>
            Đăng nhập với Google
          </Text>
        </View>
        <View style={{marginTop: 20}}></View>
        <Text
          style={{
            ...Typography.title3Normal,
            color: Colors.Grey.grey_600,
            textAlign: 'center',
          }}>
          hoặc
        </Text>
        <View style={{marginTop: 20}}></View>
        <Input
          width={'100%'}
          height={43}
          placeholder={'tên tài khoản'}
          value={email}
          onChangeText={setEmail}
        />
        <View style={{marginTop: 24}}></View>
        <Input
          width={'100%'}
          height={43}
          placeholder={'mật khẩu'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <View style={{marginTop: 80}}></View>
        <Button width={'100%'} height={60} title={'Đăng nhập'} />
        <View style={{marginTop: 20}}></View>
        <Text
          style={{
            ...Typography.textBold,
            color: Colors.Primary.primary_600,
            textAlign: 'center',
          }}>
          Quên mật khẩu
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white
  },
});
