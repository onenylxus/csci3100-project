// Import
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import ForgotPasswordForm from '../components/ForgotPasswordForm';
import Style from '../assets/style';

// Export forgot password screen
export default function ForgotPasswordScreen() {
  const windowWidth = Dimensions.get('window').width;
  const forgetFormWidth = Math.min(windowWidth, 400);

  return (
    <View style={Style.container}>
      <View style={{ width: forgetFormWidth, alignSelf: 'center' }}>
        <Text style={{ minWidth: '75%', maxWidth: '75%', alignSelf: 'center' }}>
          Enter your verified CUHK Link Email to reset your password.{' '}
        </Text>
        <ForgotPasswordForm />
      </View>
    </View>
  );
}
