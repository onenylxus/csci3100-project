/**
 * CU There Team
 * @Component GuessFeedStack - A stack for GuestFeed

 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 * 
 * Navigate to ChannelScreen and GuestFeedScreen
 * PURPOSE: This is a module for Guest Feed Stack and the stack screen
 * GuestFeedScreen is the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GuestFeedScreen from '../GuestFeedScreen';
import BackableHeader from '../../assets/headers/BackableHeader';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export FeedStack
export default function GuestFeedStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to GuestFeedScreen */}
      <Stack.Screen
        name="GuestFeed"
        component={GuestFeedScreen}
        options={() => BackableHeader('Feed')}
      />
    </Stack.Navigator>
  );
}
