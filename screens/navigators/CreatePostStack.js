// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from '../CreatePostScreen';

// Stack
const Stack = createStackNavigator();

// Export create post stack
export default function CreatePostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}