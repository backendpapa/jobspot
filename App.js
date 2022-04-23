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
import Specialization from './screens/Search/Specialization/Specialization';
import JobSearch from './screens/Search/JobSearch/JobSearch';




const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{height:70}}}>
      <Tab.Screen options={{tabBarIcon:(({color,focused})=>{
        return <View>
          <Icon color={focused==true?colors.ultra:colors.primary} name="home" type="feather" />
        </View>
      })}} name="Home"  component={Home} />
      <Tab.Screen  options={{tabBarIcon:(({color,focused})=>{
        return <View>
          <Icon color={focused==true?colors.ultra:colors.primary} name="flow-tree" type="entypo" />
        </View>
      })}} name="test1" component={Signup} />

<Tab.Screen  options={{tabBarIcon:(({color,focused})=>{
        return <View>
          <Icon size={45} color={colors.primary}  name="add-circle" type="ion" />
        </View>
      })}} name="test2" component={Signup} />

<Tab.Screen  options={{tabBarIcon:(({color,focused})=>{
        return <View>
          <Icon color={focused==true?colors.ultra:colors.primary} name="comment-outline" type="material-community" />
        </View>
      })}} name="test3" component={Login} />
       <Tab.Screen  options={{tabBarIcon:(({color,focused})=>{
        return <View>
          <Icon color={focused==true?colors.ultra:colors.primary} name="bookmark-outline" type="material-community" />
        </View>
      })}} name="test4" component={Signup} />
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
        <Stack.Screen  options={{headerShown:true,headerTransparent:true,headerTitle:()=>{return <Text></Text>}}} name="Specialization"  component={Specialization} />
        <Stack.Screen  options={{headerShown:true,headerTransparent:true,headerTitle:()=>{return <Text></Text>}}} name="JobSearch"  component={JobSearch} />
        <Stack.Screen name="HomeScreen" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;