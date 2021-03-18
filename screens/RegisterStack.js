// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './RegisterScreen';

const Stack = createStackNavigator();

export default function CreatePostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreatePostRegister" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
