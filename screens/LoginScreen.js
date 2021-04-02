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
        onPress={() => navigation.navigate('Feed')}
      >
        Continue as guest
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{ ...Style.hyperlink, alignItems: 'flex-start', margin: 8 }}
          onPress={() => navigation.navigate('Register')}
        >
          Create Account
        </Text>
        <Text
          style={{ ...Style.hyperlink, alignItems: 'flex-end', margin: 8 }}
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot Password
        </Text>
      </View>
    </View>
  );
}
