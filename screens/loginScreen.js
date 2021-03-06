// Import
import React from 'react';
import { Text, View } from 'react-native';
import LoginForm from '../components/LoginForm';
import Style from '../assets/style';

// Export login screen
export default function LoginScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <Text style={Style.loginTitle}>CU There</Text>
      <LoginForm />
      <Text
        style={{ ...Style.hyperlink, marginTop: 20 }}
        onPress={() => navigation.navigate('Home')}
      >
        Continue as guest
      </Text>
    </View>
  );
}
