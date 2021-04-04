// Import
import React from 'react';
import { Text, View } from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Style from '../assets/style';

// Export forgot password screen
export default function ForgotPasswordScreen() {
  return (
    <View style={Style.container}>
      <Text>
        Enter your verified CUHK Link Email. We will send you a link. Please
        click the link to reset your password.
      </Text>
      <ForgotPasswordForm />
    </View>
  );
}
