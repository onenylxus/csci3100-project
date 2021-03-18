// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPasswordScreen from './ForgotPasswordScreen';

const Stack = createStackNavigator();

export default function CreatePostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Back to Login Page"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}