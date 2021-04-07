// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddInfoScreen from '../AddInfoScreen';
import RegisterScreen from '../RegisterScreen';
import VerificationScreen from '../VerificationScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export register stack
export default function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="AddInfo" component={AddInfoScreen} options={Header} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={Header}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}
