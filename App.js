// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  faComment,
  faHome,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from './components/AuthContext';
import ChatroomStack from './screens/stacks/ChatroomStack';
import CreatePostStack from './screens/stacks/CreatePostStack';
import FeedStack from './screens/stacks/FeedStack';
import ForgotPasswordStack from './screens/stacks/ForgotPasswordStack';
import GuestFeedStack from './screens/stacks/GuestFeedStack';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProfileStack from './screens/stacks/ProfileStack';
import RegisterStack from './screens/stacks/RegisterStack';

// Stack and tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Export application
export default function App() {
  // Clear
  // AsyncStorage.clear();

  // Login state
  const [isLogin, setIsLogin] = React.useState(false);

  // Authentication method
  const authMethod = React.useMemo(
    () => ({
      login: async (data) => {
        await AsyncStorage.setItem('@username', data.username);
        setIsLogin(true);
      },
      logout: async () => {
        await AsyncStorage.setItem('@username', '');
        setIsLogin(false);
      },
      getUser: async (setter) => {
        const user = await AsyncStorage.getItem('@username');
        if (user !== null) {
          setter(user);
        }
      },
    }),
    []
  );

  // No header option
  function NoHeader() {
    return { headerShown: false };
  }

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authMethod}>
        {isLogin ? (
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
            <Tab.Screen name="Feed" component={FeedStack} option={Header} />
            <Tab.Screen name="CreatePost" component={CreatePostStack} />
            <Tab.Screen name="Chatroom" component={ChatroomStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordStack}
              option={NoHeader}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={Header}
            />
            <Stack.Screen
              name="Register"
              component={RegisterStack}
              options={Header}
            />
            <Stack.Screen
              name="GuestFeed"
              component={GuestFeedStack}
              options={Header}
            />
          </Stack.Navigator>
        )}
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
