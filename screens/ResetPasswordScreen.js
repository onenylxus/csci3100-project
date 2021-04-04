// Import
import React from 'react';
import { View } from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';
import Style from '../assets/style';

// Export reset password screen
export default function ForgotPasswordScreen() {
  return (
    <View style={Style.container}>
      <ResetPasswordForm />
    </View>
  );
}
