// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from './CreatePostScreen';

const Stack = createStackNavigator();

export default function CreatePostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="CreatePost" component={CreatePostScreen} />
    </Stack.Navigator>
  );
}
