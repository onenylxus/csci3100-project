/**
 * CU There Team
 * @component LoginScreen - A screen which provide a LoginForm for users to enter username and password to login
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * LoginScreen is the Homepage of the application
 * PURPOSE: This is the LoginScreen in which another component LoginForm is used to
 *          proceed the login process or register or continue as guest or reset password
 */

// Import
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
