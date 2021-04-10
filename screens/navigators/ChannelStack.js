// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChannelFeedScreen from '../ChannelFeedScreen';
import ChannelScreen from '../ChannelScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export Channel stack
export default function ChannelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Channels"
        component={ChannelScreen}
        options={Header}
      />
      <Stack.Screen
        name="ChannelFeed"
        component={ChannelFeedScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}