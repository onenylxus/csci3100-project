// Import
import React from 'react';
import { Image, Pressable } from 'react-native';

// Export
export default function Header() {
  return {
    headerTitle: 'CU There',
    headerStyle: {
      backgroundColor: '#69C6F0',
    },
    headerTintColor: '#ffffff',
    headerLeft: null,
    headerRight: () => (
      <Pressable onPress={() => undefined}>
        <Image
          style={{ width: 32, height: 32, margin: 8, borderRadius: 16 }}
          source={require('../assets/icons/icon.png')}
          capInsets
        />
      </Pressable>
    ),
  };
}
