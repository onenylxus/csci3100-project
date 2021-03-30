// Import
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// prettier-ignore
import { faComment, faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import ChatroomStack from './ChatroomStack';
import CreatePostStack from './CreatePostStack';
import FeedStack from './FeedStack';
import ProfileStack from './ProfileStack';

// Tab
const Tab = createBottomTabNavigator();

// Export home tab
export default function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let icon;

          switch (route.name) {
            case 'Chatroom':
              icon = faComment;
              break;
            case 'CreatePost':
              icon = faPlus;
              break;
            case 'Feed':
              icon = faHome;
              break;
            case 'Profile':
              icon = faUser;
              break;
            default:
              break;
          }

          return <FontAwesomeIcon icon={icon} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        scrollEnabled: false,
      }}
    >
      <Tab.Screen name="Feed" component={FeedStack} />
      <Tab.Screen name="CreatePost" component={CreatePostStack} />
      <Tab.Screen name="Chatroom" component={ChatroomStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
