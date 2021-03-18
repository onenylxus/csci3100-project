// Import
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import SVGIcon from '@fortawesome/free-solid-svg-icons';
import ChatroomStack from './ChatroomStack';
import CreatePostStack from './CreatePostStack';
import FeedStack from './FeedStack';
import ProfileStack from './ProfileStack';

// Tab
const Tab = createBottomTabNavigator();

// Export home tabs
export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;
          // Set different 'icons' for each route
          if (route.name === 'Feed') {
            icon = SVGIcon.faHome;
          } else if (route.name === 'Profile') {
            icon = SVGIcon.faUser;
          } else if (route.name === 'CreatePost') {
            icon = SVGIcon.faPlus;
          } else if (route.name === 'Chatroom') {
            icon = SVGIcon.faComment;
          }
          return <FontAwesomeIcon icon={icon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="CreatePost" component={CreatePostStack} />
      <Tab.Screen name="Chatroom" component={ChatroomStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
