// Import
import React from 'react';
import { Text, View } from 'react-native';
import LoginForm from '../components/loginForm';
import Style from '../assets/style';

// Export login screen
export default function LoginScreen() {
  return (
    <View style={Style.container}>
      <Text style={Style.loginTitle}>CU There</Text>
      <LoginForm />
    </View>
  );
}
