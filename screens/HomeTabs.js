// Import
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import FeedScreen from './FeedScreen';

// Tab
const Tab = createBottomTabNavigator();

// Export home tabs
export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
    </Tab.Navigator>
  );
}
