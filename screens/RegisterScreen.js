// Import
import React from 'react';
import { Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';
import Style from '../assets/style';

// Export register screen
export default function RegisterScreen() {
  return (
    <View style={Style.container}>
      <Text style={Style.loginTitle}>Create your account</Text>
      <RegisterForm />
    </View>
  );
}
