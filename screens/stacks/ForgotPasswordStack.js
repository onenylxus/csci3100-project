/**
 * CU There Team
 * @Component ForgotPasswordStack - A stack for Forget Password
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate to ForgetPasswordScreen, VerificationScreen and ResetPasswordScreen
 * PURPOSE: This is a module for Forget Password Stack and the stack screen
 * ForgetPasswordScreen, VerificationScreen and ResetPasswordScreen are the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from '../ForgotPasswordScreen';
import ResetPasswordScreen from '../ResetPasswordScreen';
import VerificationScreen from '../VerificationScreen';
import BackableHeader from '../../assets/headers/BackableHeader';
import Header from '../../assets/headers/Header';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export ForgotPasswordStack
export default function ForgotPasswordStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to ForgetPasswordScreen */}
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={() => BackableHeader('ForgotPassword')}
      />
      {/* Navigate to VerificationScreen */}
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={() => Header('Verification')}
      />
      {/* Navigate to ResetPasswordScreen */}
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={() => Header('ResetPassword')}
      />
    </Stack.Navigator>
  );
}
