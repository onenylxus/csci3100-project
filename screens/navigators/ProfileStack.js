// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import ProfileScreen from '../ProfileScreen';
import EditPostScreen from '../EditPostScreen';
import EditProfileScreen from '../EditProfileScreen';
import SettingsScreen from '../SettingsScreen';
import BackableHeader from '../../assets/headers/BackableHeader';
import CogHeader from '../../assets/headers/CogHeader';

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
        options={() => CogHeader(navigation, 'Profile')}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={() => BackableHeader('EditProfile')}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => BackableHeader('Settings')}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={() => BackableHeader('EditPost')}
      />
    </Stack.Navigator>
  );
}
