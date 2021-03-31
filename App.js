// Import
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordStack from './screens/navigators/ForgotPasswordStack';
import Header from './components/Header';
import HomeTab from './screens/navigators/HomeTab';
import LoginScreen from './screens/LoginScreen';
import RegisterStack from './screens/navigators/RegisterStack';
import VerificationScreen from './screens/VerificationScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import AddInfoScreen from './screens/AddInfoScreen';

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
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordStack} options={NoHeader} />
        <Stack.Screen name="Tabs" component={HomeTab} options={Header} />
        <Stack.Screen name="Verification" component={VerificationScreen} options={NoHeader} />
        <Stack.Screen name="Login" component={LoginScreen} options={Header} />
        <Stack.Screen name="Register" component={RegisterStack} options={Header} />
        <Stack.Screen name="EditProfile" component={EditProfileScreen} options={Header} />
        <Stack.Screen name="AddInfo" component={AddInfoScreen} options={NoHeader} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
