// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  faBars,
  faComment,
  faHome,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import AuthContext from './components/AuthContext';
import ChatroomStack from './screens/navigators/ChatroomStack';
import ChannelStack from './screens/navigators/ChannelStack';
import CreatePostStack from './screens/navigators/CreatePostStack';
import FeedStack from './screens/navigators/FeedStack';
import ForgotPasswordStack from './screens/navigators/ForgotPasswordStack';
import GuestFeedStack from './screens/navigators/GuestFeedStack';
import Header from './components/Header';
import LoginScreen from './screens/LoginScreen';
import ProfileStack from './screens/navigators/ProfileStack';
import RegisterStack from './screens/navigators/RegisterStack';

// Stack and tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Export application
export default function App() {
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

  // Initial storage setup
  AsyncStorage.getAllKeys().then((keys) => {
    if (!keys.includes('@username')) {
      AsyncStorage.setItem('@username', '');
    }
  });

  // Login automation
  AsyncStorage.getItem('@username').then((user) => {
    setIsLogin(user !== null);
  });

  // No header option
  function NoHeader() {
    return { headerShown: false };
  }

  const [fontsLoaded] = useFonts({
    Sarina: require('./assets/fonts/Sarina-Regular.ttf'),
    Baloo: require('./assets/fonts/Baloo2-Medium.ttf'),
    ConcertOne: require('./assets/fonts/ConcertOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
                  case 'Channel':
                    return <FontAwesomeIcon icon={faBars} color={color} />;
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
            <Tab.Screen name="Channel" component={ChannelStack} />
            <Tab.Screen name="CreatePost" component={CreatePostStack} />
            <Tab.Screen name="Chatroom" component={ChatroomStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordStack}
              options={NoHeader}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={Header}
            />
            <Stack.Screen
              name="Register"
              component={RegisterStack}
              options={NoHeader}
            />
            <Stack.Screen
              name="GuestFeed"
              component={GuestFeedStack}
              options={NoHeader}
            />
          </Stack.Navigator>
        )}
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
