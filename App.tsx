import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import UserNavigation from './src/navigation/UserNavigation';
import AppNavigation from './src/navigation/AppNavigation';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <NavigationContainer>
      {/* <UserNavigation /> */}
      <AppNavigation />
    </NavigationContainer>
  );
}

export default App;
