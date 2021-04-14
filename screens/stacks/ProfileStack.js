// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import AboutUsScreen from '../AboutUsScreen';
import ProfileScreen from '../ProfileScreen';
import EditPostScreen from '../EditPostScreen';
import EditProfileScreen from '../EditProfileScreen';
import SeeFollowerScreen from '../SeeFollowerScreen';
import SeeFollowingScreen from '../SeeFollowingScreen';
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
        options={() => BackableHeader('Edit Profile')}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => BackableHeader('Settings')}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={() => BackableHeader('About Us')}
      />
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={() => BackableHeader('Edit Post')}
      />
      <Stack.Screen
        name="Follower"
        component={SeeFollowerScreen}
        options={() => BackableHeader('Follower')}
      />
      <Stack.Screen
        name="Following"
        component={SeeFollowingScreen}
        options={() => BackableHeader('Following')}
      />
    </Stack.Navigator>
  );
}
