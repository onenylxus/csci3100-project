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

// Stack
const Stack = createStackNavigator();

// Export feed stack
export default function FeedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={() => Header('Feed')}
      />
      <Stack.Screen
        name="CreateReport"
        component={CreateReportScreen}
        options={() => BackableHeader('Create a Report')}
      />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={() => BackableHeader('Profile')}
      />
      <Stack.Screen
        name="Follower"
        component={SeeFollowerScreen}
        options={() => BackableHeader('Follower')}
      />
      <Stack.Screen
        name="Following"
        component={SeeFollowingScreen}
        options={() => BackableHeader('Following')}
      />
    </Stack.Navigator>
  );
}
