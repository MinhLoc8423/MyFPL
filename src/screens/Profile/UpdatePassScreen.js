import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import images from '../../utils/images';
import {Typography} from '../../utils/typography';
import {Colors} from '../../utils/colors';
import {UserContext} from '../../Context/UserContext';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {updatePass} from '../../services/UserService';

const UpdatePassScreen = props => {
  const {arr} = useContext(UserContext);
  const {navigation} = props;
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [comfirmPass, setComfirmPass] = useState('');

  const updatePassword = async () => {
    try {
      if (oldPass == '' || newPass == '' || comfirmPass == '') {
        Alert.alert('Vui lòng không để trống');
        return;
      } else if (newPass !== comfirmPass) {
        Alert.alert('Mật khẩu mới không trùng khớp với mật khẩu xác nhận');
        return;
      }
      const info = await updatePass(arr._id, oldPass, newPass);
      if (info.status == 200) {
        Alert.alert("Đổi mật khẩu thành công");
        setOldPass('');
        setNewPass('');
        setComfirmPass('');
      }
    } catch (error) {
      console.error('Lỗi: ', error);
      Alert.alert(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1, marginVertical: 45, marginHorizontal: 20}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={images.icon_back} />
        </Pressable>
        <Text
          style={{
            ...Typography.headlineBold,
            color: Colors.secondary,
            marginTop: 30,
            marginBottom: 26,
          }}>
          Update Password
        </Text>
        <Input
          label={'Old Password'}
          secureTextEntry={true}
          value={oldPass}
          onChangeText={setOldPass}
        />
        <Input
          label={'New Password'}
          secureTextEntry={true}
          value={newPass}
          onChangeText={setNewPass}
        />
        <Input
          label={'Confirm Password'}
          secureTextEntry={true}
          value={comfirmPass}
          onChangeText={setComfirmPass}
        />
        <View
          style={{
            marginTop: 60,
            marginBottom: 90,
            width: 250,
            height: 50,
            marginHorizontal: 60,
          }}>
          <Button
            title={'Update'}
            backgroundColor={Colors.secondary}
            onPress={updatePassword}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default UpdatePassScreen;
