// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from '../RegisterScreen';

// Stack
const Stack = createStackNavigator();

// Export register stack
export default function RegisterStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
