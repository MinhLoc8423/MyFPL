import React from 'react';
import {View, Text, Image, Animated} from 'react-native';
import {Colors} from '../utils/colors';
import {Typography} from '../utils/typography';

const TabIcon = ({focused, icon_ed, icon, label}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 35,
          width: 120,
          borderRadius: 250,
          justifyContent: 'center',
          paddingLeft: 16,
          paddingRight: 17,
          alignItems: 'center',
          backgroundColor: focused ? '#FFD6AD' : '',
          borderRadius: 25,
        }}>
        {focused ? (
          <Image source={icon_ed} style={{width: 20, height: 20}} />
        ) : (
          <Image source={icon} style={{width: 20, height: 20}} />
        )}
        {focused && (
          <Text
            numberOfLines={1}
            style={{
              marginLeft: 8,
              color: Colors.primary,
              ...Typography.subheadBold,
            }}>
            {label}
          </Text>
        )}
      </View>
    </View>
  );
};

export default TabIcon;
