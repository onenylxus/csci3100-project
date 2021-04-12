// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddInfoScreen from '../AddInfoScreen';
import RegisterScreen from '../RegisterScreen';
import VerificationScreen from '../VerificationScreen';
import Header from '../../assets/headers/Header';

// Stack
const Stack = createStackNavigator();

// Export register stack
export default function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen
        name="AddInfo"
        component={AddInfoScreen}
        options={() => Header('Login')}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => Header('Login')}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={() => Header('Login')}
      />
    </Stack.Navigator>
  );
}
