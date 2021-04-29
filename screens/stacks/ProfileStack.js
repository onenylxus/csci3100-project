/**
 * CU There Team
 * @Component ProfileStack - A stack for Profile

 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 * 
 * Navigate to ProfileScreen, EditProfileScreen, SettingsScreen, AboutUsScreen, EditPostScreen, 
 * SeeFollowerScreen and SeeFollowingScreen
 * PURPOSE: This is a module for Channel Stack and the stack screen 
 * ProfileScreen, EditProfileScreen, SettingsScreen, AboutUsScreen, EditPostScreen, 
 * SeeFollowerScreen and SeeFollowingScreen are the component for this stack
 */

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

// Create Stack Navigator
const Stack = createStackNavigator();

// Export ProfileStack
export default function ProfileStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      {/* Navigate to ProfileScreen */}
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => CogHeader(navigation, 'Profile')}
      />
      {/* Navigate to EditProfileScreen */}
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={() => BackableHeader('Edit Profile')}
      />
      {/* Navigate to SettingsScreen */}
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={() => BackableHeader('Settings')}
      />
      {/* Navigate to AboutUsScreen */}
      <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={() => BackableHeader('About Us')}
      />
      {/* Navigate to EditPostScreen */}
      <Stack.Screen
        name="EditPost"
        component={EditPostScreen}
        options={() => BackableHeader('Edit Post')}
      />
      {/* Navigate to SeeFollowerScreen */}
      <Stack.Screen
        name="Follower"
        component={SeeFollowerScreen}
        options={() => BackableHeader('Follower')}
      />
      {/* Navigate to SeeFollowingScreen */}
      <Stack.Screen
        name="Following"
        component={SeeFollowingScreen}
        options={() => BackableHeader('Following')}
      />
    </Stack.Navigator>
  );
}
