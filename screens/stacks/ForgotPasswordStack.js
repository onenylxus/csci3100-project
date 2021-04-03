// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export forgot password stack
export default function ForgotPasswordStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}
