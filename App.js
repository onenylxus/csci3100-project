// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {
  faBars,
  faCrown,
  faHome,
  faPlus,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadAsync } from 'expo-font';
// import AppLoading from 'expo-app-loading';
import AuthContext from './components/AuthContext';
import ChannelStack from './screens/stacks/ChannelStack';
import CreatePostStack from './screens/stacks/CreatePostStack';
import FeedStack from './screens/stacks/FeedStack';
import ForgotPasswordStack from './screens/stacks/ForgotPasswordStack';
import GuestFeedStack from './screens/stacks/GuestFeedStack';
import Header from './assets/headers/Header';
import Headerless from './assets/headers/Headerless';
import LeaderboardStack from './screens/stacks/LeaderboardStack';
import LoginScreen from './screens/LoginScreen';
import ProfileStack from './screens/stacks/ProfileStack';
import RegisterStack from './screens/stacks/RegisterStack';

// Stack and tab
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Export application
export default function App({ testState }) {
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

  // Load fonts
  const loadFonts = React.useCallback(async () => {
    await loadAsync({
      Sarina: require('./assets/fonts/Sarina-Regular.ttf'),
      Baloo: require('./assets/fonts/Baloo2-Medium.ttf'),
      ConcertOne: require('./assets/fonts/ConcertOne-Regular.ttf'),
      Muthiara: require('./assets/fonts/MuthiaraDemoVersion.otf'),
      Roboto: require('./assets/fonts/RobotoSlab-Regular.ttf'),
      Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    });
  }, []);

  React.useEffect(() => {
    // Initial storage setup
    AsyncStorage.getAllKeys().then((keys) => {
      if (!keys.includes('@username')) {
        AsyncStorage.setItem('@username', '');
      }
    });

    // Login automation
    if (testState !== undefined) {
      setIsLogin(testState);
    } else {
      AsyncStorage.getItem('@username').then((user) => {
        setIsLogin(user !== null);
      });
    }

    // Load fonts
    loadFonts();
  }, [testState, loadFonts]);

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
                  case 'Leaderboard':
                    return <FontAwesomeIcon icon={faCrown} color={color} />;
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
              activeTintColor: '#69c6f0',
              inactiveTintColor: '#cccccc',
              scrollEnabled: false,
            }}
          >
            <Tab.Screen name="Feed" component={FeedStack} />
            <Tab.Screen name="Channel" component={ChannelStack} />
            <Tab.Screen name="CreatePost" component={CreatePostStack} />
            <Tab.Screen name="Leaderboard" component={LeaderboardStack} />
            <Tab.Screen name="Profile" component={ProfileStack} />
          </Tab.Navigator>
        ) : (
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordStack}
              options={Headerless}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={() => Header('Login')}
            />
            <Stack.Screen
              name="Register"
              component={RegisterStack}
              options={Headerless}
            />
            <Stack.Screen
              name="GuestFeed"
              component={GuestFeedStack}
              options={Headerless}
            />
          </Stack.Navigator>
        )}
      </AuthContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
