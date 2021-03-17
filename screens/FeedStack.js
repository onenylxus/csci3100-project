// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from './FeedScreen';

const Stack = createStackNavigator();

export default function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
    </Stack.Navigator>
  );
}
