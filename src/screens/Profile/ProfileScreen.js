import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {UserContext} from '../../Context/UserContext';
import {formatDate} from '../../utils/time';
import images from '../../utils/images';
import {Colors} from '../../utils/colors';
import {Typography} from '../../utils/typography';
import {update} from '../../services/UserService';

const ProfileScreen = props => {
  const {navigation} = props;
  const {arr, setArr} = useContext(UserContext);
  const [fullName, setFullName] = useState(arr.fullName);
  const [dateOfBirth, setDateOfBirth] = useState(formatDate(arr.dateOfBirth));
  const [phoneNumber, setPhoneNumber] = useState(arr.phoneNumber);
  const [location, setLocation] = useState(arr.address);

  const updapte = async () =>{
    try {
      const info = await update(arr._id, fullName, dateOfBirth, phoneNumber, location);
      setArr(info.data);
      Alert.alert('Cập nhật thành công');
    } catch (error) {
      console.error('Lỗi khi cập nhật thông tin người dùng:', error);
      Alert.alert('Đã xảy ra lỗi khi cập nhật thông tin người dùng.');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{position: 'relative'}}>
          <Image source={images.background} style={{width: '100%'}} />
          <Image
            source={images.avata}
            style={{
              width: 62,
              top: 50,
              left: 20,
              height: 62,
              borderRadius: 100,
              position: 'absolute',
            }}
          />
          <Text
            style={{
              position: 'absolute',
              top: 120,
              left: 20,
              color: Colors.white,
              ...Typography.subheadBold,
            }}>
            {arr.fullName}
          </Text>
          <Text
            style={{
              position: 'absolute',
              top: 145,
              left: 22,
              color: Colors.white,
              ...Typography.textRegular,
            }}>
            {arr.address}
          </Text>
          <Pressable
            style={{position: 'absolute', right: 20, top: 50}}
            onPress={() => {
              navigation.navigate('Setting');
            }}>
            <Image source={images.icon_setting1} />
          </Pressable>
        </View>
        <View style={{marginBottom: -40}}></View>
        <Input
          label={'Full Name'}
          style={{marginHorizontal: 20}}
          value={fullName}
          onChangeText={setFullName}
        />
        <Input
          label={'Date Of Birth'}
          style={{marginHorizontal: 20}}
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
        <Input
          label={'Phone Number'}
          style={{marginHorizontal: 20}}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <Input
          label={'Location'}
          style={{marginHorizontal: 20}}
          value={location}
          onChangeText={setLocation}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              marginBottom: 90,
              width: 250,
              height: 50,
              marginHorizontal: 60,
            }}>
            <Button title={'Save'} backgroundColor={'#130160'} onPress={updapte}  />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  wqe: {},
});
