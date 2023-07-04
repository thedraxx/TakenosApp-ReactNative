import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import GeneralNavigator from './src/navigator/GeneralNavigator';
import { AuthProvider } from './src/context';

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <GeneralNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
