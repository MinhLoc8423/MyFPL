import React, {useEffect} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';

import SwitchNavigator from './src/navigation/SwitchNavigator';

function App(): JSX.Element {
  return <SwitchNavigator />;
}

export default App;
