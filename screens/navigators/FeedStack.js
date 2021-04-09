// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreen from '../FeedScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export feed stack
export default function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} options={Header} />
    </Stack.Navigator>
  );
}