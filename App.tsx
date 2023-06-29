import React from 'react';
// import Navigator from './src/navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import GeneralNavigator from './src/navigator/GeneralNavigator';
import { AuthProvider } from './src/context';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <Navigator /> */}
        <GeneralNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
