// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatroomScreen from './ChatroomScreen';

const Stack = createStackNavigator();

export default function ChatroomStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chatroom" component={ChatroomScreen} />
    </Stack.Navigator>
  );
}
