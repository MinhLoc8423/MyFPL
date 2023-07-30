import {View, Text, Image, StyleSheet, BackHandler} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen';
import images from '../utils/images';
import { Colors } from '../utils/colors';
import TabIcon from '../components/TabNav';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {    
          position: 'absolute',  
          paddingTop:20,
          paddingLeft:30,
          paddingRight: 30,
          paddingBottom: 20,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          borderColor: 'transparent',
          height: 98,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_home_ed} icon={images.icon_home} label={"Home"} />,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_schedule_ed} icon={images.icon_schedule} label={"Schedule"} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_bell_ed} icon={images.icon_bell} label={"Notification"} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_user_ed} icon={images.icon_user} label={"Profile"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
