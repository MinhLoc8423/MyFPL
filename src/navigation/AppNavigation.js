import {View, Text, Image, StyleSheet, BackHandler} from 'react-native';
import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/Home/HomeScreen';
import ScheduleScreen from '../screens/Schedule/ScheduleScreen';
import NotificationScreen from '../screens/NotificationScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import ScheduleExam from '../screens/Schedule/ScheduleExam';

import images from '../utils/images';
import { Colors } from '../utils/colors';

import TabIcon from '../components/TabNav';
import JobScreen from '../screens/Home/JobFullScreen';
import SettingScreen from '../screens/Profile/SettingScreen';
import UpdatePassScreen from '../screens/Profile/UpdatePassScreen';
import DescriptionScreen from '../screens/Home/DescriptionScreen';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Job' component={JobScreen} />
          <Stack.Screen name='Description' component={DescriptionScreen} />
      </Stack.Navigator>
  )
}

const ScheduleStack = () => {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Schedule' component={ScheduleScreen} />
          <Stack.Screen name='Exam' component={ScheduleExam} />
      </Stack.Navigator>
  )
}

const ProfileStack = () => {
  return (
      <Stack.Navigator>
          <Stack.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}} />
          <Stack.Screen name='Setting' component={SettingScreen} options={{headerShown: false}} />
          <Stack.Screen name='UpdatePass' component={UpdatePassScreen} options={{headerShown: false}} />
      </Stack.Navigator>
  )
}

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
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          borderColor: 'transparent',
          height: 90,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_home_ed} icon={images.icon_home} label={"Home"} />,
        }}
      />
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
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
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => <TabIcon focused={focused} icon_ed={images.icon_user_ed} icon={images.icon_user} label={"Profile"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
