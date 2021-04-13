// Import
import React from 'react';
import { Text, View } from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Style from '../assets/style';

// Export forgot password screen
export default function ForgotPasswordScreen() {
  return (
    <View style={Style.container}>
      <Text style={{ width: '85%' }}>
        Enter your verified CUHK Link Email to reset your password.{' '}
      </Text>
      <ForgotPasswordForm />
    </View>
  );
}
