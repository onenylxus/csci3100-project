/**
 * CU There Team
 * @component FeedStack - A stack for Feed
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate to FeedScreen, CreateReportScreen, OtherProfileScreen, SeeFollowerScreen and SeeFollowingScreen
 * PURPOSE: This is a module for Feed Stack and the stack screen
 * FeedScreen, CreateReportScreen, OtherProfileScreen, SeeFollowerScreen and SeeFollowingScreen are the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateReportScreen from '../CreateReportScreen';
import FeedScreen from '../FeedScreen';
import OtherProfileScreen from '../OtherProfileScreen';
import Header from '../../assets/headers/Header';
import BackableHeader from '../../assets/headers/BackableHeader';
import SeeFollowerScreen from '../SeeFollowerScreen';
import SeeFollowingScreen from '../SeeFollowingScreen';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export FeedStack
export default function FeedStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to FeedScreen */}
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={() => Header('Feed')}
      />
      {/* Navigate to CreateReportScreen */}
      <Stack.Screen
        name="CreateReport"
        component={CreateReportScreen}
        options={() => BackableHeader('Create a Report')}
      />
      {/* Navigate to OtherProfileScreen */}
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={() => BackableHeader('Profile')}
      />
      {/* Navigate to SeeFollowerScreen */}
      <Stack.Screen
        name="Follower"
        component={SeeFollowerScreen}
        options={() => BackableHeader('Follower')}
      />
      {/* Navigate to SeeFollowingScreen */}
      <Stack.Screen
        name="Following"
        component={SeeFollowingScreen}
        options={() => BackableHeader('Following')}
      />
    </Stack.Navigator>
  );
}
