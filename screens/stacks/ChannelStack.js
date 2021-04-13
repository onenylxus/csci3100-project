// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChannelFeedScreen from '../ChannelFeedScreen';
import ChannelScreen from '../ChannelScreen';
import Header from '../../assets/headers/Header';

// Stack
const Stack = createStackNavigator();

// Export channel stack
export default function ChannelStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Channels"
        component={ChannelScreen}
        options={() => Header('Channels')}
      />
      <Stack.Screen
        name="ChannelFeed"
        component={ChannelFeedScreen}
        options={() => Header('ChannelFeed')}
      />
    </Stack.Navigator>
  );
}