import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';
import News from '../screens/NewsScreen';
import Transcripts from '../screens/TranscriptsScreen';
import Profile from '../screens/ProfileScreen';
import images from '../utils/images';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const screenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      if (route.name === 'Home') {
        if (!focused) {
          return <Image source={images.ic_home} />;
        } else {
          return <Image source={images.ic_home_ed} />;
        }
      } else if (route.name === 'News') {
        if (!focused) {
          return <Image source={images.icon_news} />;
        } else {
          return <Image source={images.icon_news_ed} />;
        }
      }
      else if (route.name === 'Transcripts') {
        if (!focused) {
          return <Image source={images.icon_point} />;
        } else {
          return <Image source={images.icon_point_ed} />;
        }
      }
      else if (route.name === 'Profile') {
        if (!focused) {
          return <Image source={images.icon_profile} />;
        } else {
          return <Image source={images.icon_profile_ed} />;
        }
      }
    },
    tabBarLabel: ({focused, color, size}) => {
        if (route.name == 'Home') {
            return focused ? <Text style={styles.textLabelSeleted}>Trang chủ</Text> : <Text style={styles.textLabel}>Trang chủ</Text>
        }
        if (route.name == 'News') {
            return focused ? <Text style={styles.textLabelSeleted}>Tin tức</Text> : <Text style={styles.textLabel}>Tin tức</Text>
        }
        if (route.name == 'Transcripts') {
            return focused ? <Text style={styles.textLabelSeleted}>Điểm</Text> : <Text style={styles.textLabel}>Điểm</Text>
        }
        if (route.name == 'Profile') {
            return focused ? <Text style={styles.textLabelSeleted}>Cá Nhân</Text> : <Text style={styles.textLabel}>Cá Nhân</Text>
        }
    },
    tabBarStyle: styles.icon,
    headerShown: false,
  });
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Transcripts" component={Transcripts} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  icon: {
    with: 70,
    height: 70,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 8,
    paddingright: 8,
    gap: 4,
  },
  textLabelSeleted: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
    color: '#1877F2',
  },
  textLabel: {
    fontFamily: 'Poppins-Regular',
    fontStyle: 'normal',
    fontSize: 14,
    lineHeight: 14,
  },
});
