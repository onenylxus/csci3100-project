// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatroomScreen from '../ChatroomScreen';
import ChatboxPhoneScreen from '../ChatboxPhoneScreen';
import Header from '../../assets/headers/Header';

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
      <Stack.Screen
        name="ChatboxPhone"
        component={ChatboxPhoneScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}
