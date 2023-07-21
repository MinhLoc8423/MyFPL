import {StatusBar} from 'react-native';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import { Colors } from '../utils/colors';

const SwitchNavigator = () => {
  useEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

export default SwitchNavigator;
