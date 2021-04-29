/**
 * CU There Team
 * @Component RegisterStack - A stack for Register
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate to AddInfoScreen, RegisterScreen and VerificationScreen
 * PURPOSE: This is a module for Register Feed Stack and the stack screen
 * AddInfoScreen, RegisterScreen and VerificationScreen are the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddInfoScreen from '../AddInfoScreen.web';
import RegisterScreen from '../RegisterScreen';
import VerificationScreen from '../VerificationScreen';
import BackableHeader from '../../assets/headers/BackableHeader';
import Header from '../../assets/headers/Header';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export RegisterStack
export default function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Register">
      {/* Navigate to AddInfoScreen */}
      <Stack.Screen
        name="AddInfo"
        component={AddInfoScreen}
        options={() => BackableHeader('AddInfo')}
      />
      {/* Navigate to RegisterScreen */}
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={() => BackableHeader('Register')}
      />
      {/* Navigate to VerificationScreen */}
      <Stack.Screen
        name="Verification"
        component={VerificationScreen}
        options={() => Header('Verification')}
      />
    </Stack.Navigator>
  );
}
