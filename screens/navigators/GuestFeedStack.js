// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuestFeedScreen from '../GuestFeedScreen';
import BackableHeader from '../../assets/headers/BackableHeader';

// Stack
const Stack = createStackNavigator();

// Export feed stack
export default function GuestFeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GuestFeed"
        component={GuestFeedScreen}
        options={() => BackableHeader('Feed')}
      />
    </Stack.Navigator>
  );
}
