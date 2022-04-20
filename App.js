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
import Home from './screens/Home/HomeScreen/HomeScreen';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Description from './screens/Home/DescriptionScreen/DescriptionScreen';
import { colors } from './constant';
import UploadCV from './screens/Home/UploadCv/UploadCV';
import UploadCVSuccess from './screens/Home/UploadCVSuccess/UploadCVSuccess';
import { Icon } from '@rneui/base';
import MainSearch from './screens/Search/MainSearch/MainSearch';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="Home"  component={Home} />
      <Tab.Screen  name="Settings" component={Signup} />
    </Tab.Navigator>
  );
}




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
        <Stack.Screen options={{headerShown:true, headerStyle:{backgroundColor:colors.background_2},headerTransparent:true,headerTitle:'',headerRight:({})=>{
          return <Icon name="more-vert" />
        }}} name="Description" component={Description} />
        
        <Stack.Screen options={{headerShown:true, headerStyle:{backgroundColor:colors.background_2},headerTransparent:true,headerTitle:'',headerRight:({})=>{
          return <Icon name="more-vert" />
        }}} name="UploadCV" component={UploadCV} />
        <Stack.Screen  options={{headerShown:true, headerStyle:{backgroundColor:colors.background_2},headerTransparent:true,headerTitle:()=>{return <Text></Text>},headerRight:({})=>{
          return <Icon name="more-vert" />
        }}} name="UploadCVSuccess"  component={UploadCVSuccess} />
        
        <Stack.Screen  options={{headerShown:true,headerTransparent:true,headerTitle:()=>{return <Text></Text>},headerTintColor:'white'}} name="MainSearch"  component={MainSearch} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;