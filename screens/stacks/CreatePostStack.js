/**
 * CU There Team
 * @component CreatePostStack - A stack for Create Post
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate to CreatePostScreen
 * PURPOSE:This is a module for Create Post Stack and the stack screen
 * CreatePostScreen is the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreatePostScreen from '../CreatePostScreen';
import BackableHeader from '../../assets/headers/BackableHeader';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export CreatePostStack
export default function CreatePostStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to CreatePostScreen */}
      <Stack.Screen
        name="CreatePost"
        component={CreatePostScreen}
        options={() => BackableHeader('CreatePost')}
      />
    </Stack.Navigator>
  );
}
