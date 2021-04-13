// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreateReportScreen from '../CreateReportScreen';
import FeedScreen from '../FeedScreen';
import OtherProfileScreen from '../OtherProfileScreen';
import Header from '../../assets/headers/Header';

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
        options={() => Header('Create a Report')}
      />
      <Stack.Screen
        name="OtherProfile"
        component={OtherProfileScreen}
        options={() => Header('Profile')}
      />
    </Stack.Navigator>
  );
}
