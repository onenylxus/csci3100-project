/**
 * CU There Team
 * @Component LeaderboardStack - A stack for Leaderboard

 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 * 
 * Navigate to LeaderboardScreen
 * PURPOSE: This is a module for Leaderboard Stack and the stack screen
 * LeaderboardScreen is the component for this stack
 */

// Import
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LeaderboardScreen from '../LeaderboardScreen';
import Header from '../../assets/headers/Header';

// Create Stack Navigator
const Stack = createStackNavigator();

// Export LeaderboardStack
export default function LeaderboardStack() {
  return (
    <Stack.Navigator>
      {/* Navigate to LeaderboardScreen */}
      <Stack.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={() => Header('Leaderboard')}
      />
    </Stack.Navigator>
  );
}
