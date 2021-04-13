// Import
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// Export
export default function CogHeader(navigation, title = 'CU There') {
  return {
    headerTitle: title,
    headerStyle: {
      backgroundColor: '#69c6f0',
    },
    headerTitleStyle: { alignSelf: 'center' },
    headerTintColor: '#ffffff',
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <FontAwesomeIcon
          icon={faCog}
          color="#ffffff"
          style={{ width: 32, height: 32, margin: 20, borderRadius: 20 }}
        />
      </TouchableOpacity>
    ),
  };
}
