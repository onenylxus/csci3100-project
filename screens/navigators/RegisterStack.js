// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddInfoScreen from '../AddInfoScreen';
import RegisterScreen from '../RegisterScreen';
import VerificationScreen from '../VerificationScreen';
import BackableHeader from '../../assets/headers/BackableHeader';
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
        options={() => BackableHeader('AddInfo')}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => BackableHeader('Register')}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={() => Header('Verification')}
      />
    </Stack.Navigator>
  );
}
