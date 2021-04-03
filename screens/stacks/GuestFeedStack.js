// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuestFeedScreen from '../GuestFeedScreen';

// Stack
const Stack = createStackNavigator();

// Export feed stack
export default function GuestFeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="GuestFeed" component={GuestFeedScreen} />
    </Stack.Navigator>
  );
}
