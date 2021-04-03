// Import
import React from 'react';
import { Button, View } from 'react-native';
import AuthContext from '../components/AuthContext';

// Export Settings screen

export default function SettingsScreen() {
  const { logout } = React.useContext(AuthContext);

  return (
    <View>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
