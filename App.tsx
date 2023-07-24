import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import UserNavigation from './src/navigation/UserNavigation';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <NavigationContainer>
      <UserNavigation />
    </NavigationContainer>
  );
}

export default App;
