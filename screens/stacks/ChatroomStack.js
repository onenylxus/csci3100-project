// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatroomScreen from '../ChatroomScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export chatroom stack
export default function ChatroomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chatroom"
        component={ChatroomScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}
