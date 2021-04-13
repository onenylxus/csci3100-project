// Import
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import Font from 'expo-font';
import LoginForm from '../components/LoginForm';
import Style from '../assets/style';

// Export login screen
export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <View style={Style.container2}>
      <Text style={Style.loginTitle}>CU There</Text>
      <View style={{ alignSelf: 'center' }}>
        <LoginForm />
      </View>
      <Text
        style={{ ...Style.hyperlink, marginTop: 20, alignSelf: 'center' }}
        onPress={() => navigation.navigate('GuestFeed')}
      >
        Continue as guest
      </Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
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
