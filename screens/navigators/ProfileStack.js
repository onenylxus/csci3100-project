// Import
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ProfileScreen from '../ProfileScreen';
import EditPostScreen from '../EditPostScreen';
import EditProfileScreen from '../EditProfileScreen';
import SettingsScreen from '../SettingsScreen';
import Header from '../../assets/headers/Header';

// Stack
const Stack = createStackNavigator();

// Export profile stack
export default function ProfileStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'CU There',
          headerStyle: {
            backgroundColor: '#69c6f0',
          },
          headerTintColor: '#ffffff',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <FontAwesomeIcon
                icon={faCog}
                color="#ffffff"
                style={{ width: 32, height: 32, margin: 20, borderRadius: 20 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={() => Header('EditProfile')}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => Header('Settings')}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={() => Header('EditPost')}
      />
    </Stack.Navigator>
  );
}
