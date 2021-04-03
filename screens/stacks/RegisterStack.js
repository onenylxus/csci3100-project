// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddInfoScreen from '../AddInfoScreen';
import RegisterScreen from '../RegisterScreen';
import VerificationScreen from '../VerificationScreen';

// Stack
const Stack = createStackNavigator();

// Export register stack
export default function RegisterStack() {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="AddInfo" component={AddInfoScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verification" component={VerificationScreen} />
    </Stack.Navigator>
  );
}
