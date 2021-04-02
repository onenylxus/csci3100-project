// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from '../ForgotPasswordScreen';

// Stack
const Stack = createStackNavigator();

// Export forgot password stack
export default function ForgotPasswordStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
