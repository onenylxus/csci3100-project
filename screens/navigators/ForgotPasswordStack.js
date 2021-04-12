// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import ResetPasswordScreen from '../ResetPasswordScreen';
import VerificationScreen from '../VerificationScreen';
import Header from '../../assets/headers/Header';

// Stack
const Stack = createStackNavigator();

// Export forgot password stack
export default function ForgotPasswordStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={() => Header('Login')}
      />
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={() => Header('Login')}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={() => Header('Login')}
      />
    </Stack.Navigator>
  );
}
