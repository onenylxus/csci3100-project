// Import
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import ProfileScreen from './ProfileScreen';
import CreatePostScreen from './CreatePostScreen';
import FeedScreen from './FeedScreen';

// Tab
const Tab = createBottomTabNavigator();

// Export home tabs
export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;
          // Set different 'icons' for each route
          if (route.name === 'Feed') {
            icon = faHome;
          } else if (route.name === 'Profile') {
            icon = faUser;
          } else if (route.name === 'CreatePost') {
            icon = faPlus;
          }
          return <FontAwesomeIcon icon={icon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="CreatePost" component={CreatePostScreen} />
    </Tab.Navigator>
  );
}
