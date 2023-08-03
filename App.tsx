import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {UserProvider} from './src/Context/UserContext';
import {AppProvider} from './src/Context/AppContext';
import LoginNavigation from './src/navigation/LoginNavigation';

function App(): JSX.Element {
  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setBarStyle('dark-content');
  }, []);

  return (
    <UserProvider>
      <AppProvider>
        <LoginNavigation />
      </AppProvider>
    </UserProvider>
  );
}

export default App;
