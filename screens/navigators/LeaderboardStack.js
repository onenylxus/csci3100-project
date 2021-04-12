// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeaderboardScreen from '../LeaderboardScreen';
import Header from '../../components/Header';

// Stack
const Stack = createStackNavigator();

// Export Leaderboard stack
export default function LeaderboardStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={Header}
      />
    </Stack.Navigator>
  );
}
