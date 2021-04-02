// Import
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  faComment,
  faHome,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AddInfoScreen from './screens/AddInfoScreen';
import ChatroomStack from './screens/stacks/ChatroomStack';
import CreatePostStack from './screens/stacks/CreatePostStack';
import FeedStack from './screens/stacks/FeedStack';
import ForgotPasswordStack from './screens/stacks/ForgotPasswordStack';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProfileStack from './screens/stacks/ProfileStack';
import RegisterStack from './screens/stacks/RegisterStack';
import VerificationScreen from './screens/VerificationScreen';
// import EditProfileScreen from './screens/EditProfileScreen';

// Stack
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Export application
export default function App() {
  // Client state
  const user = '';

  // No header option
  function NoHeader() {
    return { headerShown: false };
  }

  return user !== '' ? (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            switch (route.name) {
              case 'Chatroom':
                return <FontAwesomeIcon icon={faComment} color={color} />;
              case 'CreatePost':
                return <FontAwesomeIcon icon={faPlus} color={color} />;
              case 'Feed':
                return <FontAwesomeIcon icon={faHome} color={color} />;
              case 'Profile':
                return <FontAwesomeIcon icon={faUser} color={color} />;
              default:
                return new Error();
            }
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
      <StatusBar style="auto" />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="AddInfo"
          component={AddInfoScreen}
          options={NoHeader}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordStack}
          option={NoHeader}
        />
        <Stack.Screen name="Login" component={LoginScreen} option={Header} />
        <Stack.Screen
          name="Register"
          component={RegisterStack}
          options={Header}
        />
        <Stack.Screen
          name="Verification"
          component={VerificationScreen}
          option={NoHeader}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
