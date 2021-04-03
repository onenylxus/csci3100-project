// Import
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import ProfileScreen from '../ProfileScreen';
import EditProfileScreen from '../EditProfileScreen';
import SettingsScreen from '../SettingsScreen';

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
          headerStyle: {
            backgroundColor: '#69C6F0',
          },
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <FontAwesomeIcon
                icon={faCog}
                color="#000000"
                style={{ width: 32, height: 32, margin: 8, borderRadius: 16 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
