import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import {Typography} from '../utils/typography';
import {Colors} from '../utils/colors';
import images from '../utils/images';

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 30,
        paddingTop: 50,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            maxWidth: '45.33%',
            textAlign: 'left',
            ...Typography.title2,
            color: Colors.secondary,
          }}>
          Hello Orlando Diggs.
        </Text>
        <View
          style={{
            borderRadius: 200,
            overflow: 'hidden',
            width: 36, 
            height: 36,
          }}>
          <Image
            source={images.avata}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
