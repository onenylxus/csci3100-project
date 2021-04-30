/**
 * CU There Team
 * @component ChannelStack - A stack for Channel
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate to ChannelScreen and ChannelFeedScreen
 * PURPOSE: This is a module for Channel Stack and the stack screen
 * ChannelScreen and ChannelFeedScreen are the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChannelFeedScreen from '../ChannelFeedScreen';
import ChannelScreen from '../ChannelScreen';
import Header from '../../assets/headers/Header';
import BackableHeader from '../../assets/headers/BackableHeader';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export ChannelStack
export default function ChannelStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to ChannelScreen */}
      <Stack.Screen
        name="Channels"
        component={ChannelScreen}
        options={() => Header('Channels')}
      />
      {/* Navigate to ChannelFeedScreen */}
      <Stack.Screen
        name="ChannelFeed"
        component={ChannelFeedScreen}
        options={() => BackableHeader()}
      />
    </Stack.Navigator>
  );
}
