import { View, Text, SafeAreaView, Pressable, Image } from 'react-native';
import React, { useContext } from 'react';
import images from '../../utils/images';
import { Typography } from '../../utils/typography';
import { Colors } from '../../utils/colors';
import { UserContext } from '../../Context/UserContext';

const SettingScreen = props => {
  const { setUser } = useContext(UserContext);
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1, marginVertical: 45, marginHorizontal: 20 }}>
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
          marginBottom: 20,
        }}>
        Settings
      </Text>
      <Pressable
        onPress={() => {
          navigation.navigate('UpdatePass');
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: 50,
          width: '100%',
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={images.icon_lock} />
          <Text
            style={{
              ...Typography.subheadRegular,
              color: Colors.secondary,
              marginLeft: 10,
            }}>
            Password
          </Text>
        </View>
        <Image source={images.icon_selected} />
      </Pressable>
      <View style={{ marginTop: 20 }}></View>
      <Pressable
        onPress={() => {
          setUser(null);
        }}
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: 50,
          width: '100%',
          borderRadius: 10,
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image source={images.icon_logout} />
          <Text
            style={{
              ...Typography.subheadRegular,
              color: Colors.secondary,
              marginLeft: 10,
            }}>
            Logout
          </Text>
        </View>
        <Image source={images.icon_selected} />
      </Pressable>
    </SafeAreaView>
  );
};

export default SettingScreen;
