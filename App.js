// Import
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeTabs from './screens/HomeTabs';

// Stack
const Stack = createStackNavigator();

// Export application
export default function App() {
  function NoHeader() {
    return { headerShown: false };
  }
  // prettier-ignore
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={NoHeader} />
        <Stack.Screen name="Tabs" component={HomeTabs} options={Header} />
        <Stack.Screen name="Login" component={LoginScreen} options={NoHeader} />
        <Stack.Screen name="Register" component={RegisterScreen} options={NoHeader} />
      </Stack.Navigator>
      
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
