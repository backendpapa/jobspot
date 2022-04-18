/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import SplashScreen from './screens/splash/SplashScreen/SplashScreen';
import Login from './screens/auth/LoginScreen/Login';
import Signup from './screens/auth/SIgnupScreen/Signup';
import ForgotPassword from './screens/auth/ForgotPassword/ForgotPassword';
import ForgotPasswordEmail from './screens/auth/ForgotPasswordEmail/ForgotPasswordEmail';
import ForgotPasswordSuccess from './screens/auth/ForgotPasswordSuccess/ForgotPasswordSuccess';









const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ForgotPasswordEmail" component={ForgotPasswordEmail} />
        <Stack.Screen name="ForgotPasswordSuccess" component={ForgotPasswordSuccess} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;