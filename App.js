/**
 * CU There Team
 * @component App - To create an application
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * PURPOSE: This module import all the functions to create an application
 */

// Import
import React from 'react';
import { Alert, Platform } from 'react-native';
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
import { loadAsync } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import AppContext from './components/AppContext';
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

  // Platform
  const platform = React.useRef(Platform.OS);

  // Authentication method
  const AppMethod = React.useMemo(
    () => ({
      login: async (data) => {
        await AsyncStorage.setItem('@username', data.username);
        setIsLogin(true);
      },
      logout: async () => {
        await AsyncStorage.setItem('@username', '');
        setIsLogin(false);
      },
      askPerm: async (type) => {
        if (AsyncStorage.getItem('@platform') !== 'web') {
          if (type === 'camera') {
            // Camera permission
            if (!AsyncStorage.getItem('@cameraPerm')) {
              const {
                status,
              } = await ImagePicker.requestCameraPermissionsAsync();
              AsyncStorage.setItem('@cameraPerm', String(status === 'granted'));
            }
            if (!AsyncStorage.getItem('@cameraPerm')) {
              return Alert.alert(
                'Camera Permission required',
                'Sorry, we need camera permissions to make this work!',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );
            }
          } else {
            // Image permission
            if (!AsyncStorage.getItem('@imagePerm')) {
              const {
                status,
              } = await ImagePicker.requestMediaLibraryPermissionsAsync();
              AsyncStorage.setItem('@imagePerm', String(status === 'granted'));
            }
            if (!AsyncStorage.getItem('@imagePerm')) {
              return Alert.alert(
                'Image Permission required',
                'Sorry, we need to access your gallery in order to make this work!',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );
            }
          }
        }
      },
      getUser: async (setter) => {
        const user = await AsyncStorage.getItem('@username');
        if (user !== null) {
          setter(user);
        }
      },
      getPlatform: async (setter) => {
        const plat = await AsyncStorage.getItem('@platform');
        if (plat !== null) {
          setter(plat);
        }
      },
      getCameraPerm: async (setter) => {
        const perm = await AsyncStorage.getItem('@cameraPerm');
        if (perm !== null) {
          setter(perm);
        }
      },
      getImagePerm: async (setter) => {
        const perm = await AsyncStorage.getItem('@imagePerm');
        if (perm !== null) {
          setter(perm);
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
      if (!keys.includes('@cameraPerm')) {
        AsyncStorage.setItem('@cameraPerm', 'false');
      }
      if (!keys.includes('@imagePerm')) {
        AsyncStorage.setItem('@imagePerm', 'false');
      }
      AsyncStorage.setItem('@platform', platform.current);
    });

    // Login automation
    if (typeof testState === 'boolean') {
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
      <AppContext.Provider value={AppMethod}>
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
      </AppContext.Provider>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
