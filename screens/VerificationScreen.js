// Import
import React from 'react';
import { Text, View } from 'react-native';
import Style from '../assets/style';
import VerificationForm from '../components/VerificationForm';

// Export register screen
export default function VerificationScreen() {
  return (
    <View style={{ ...Style.container, marginBottom: '20%' }}>
      <Text style={{ fontFamily: 'Roboto' }}>Your verification code:</Text>
      <VerificationForm />
    </View>
  );
}
