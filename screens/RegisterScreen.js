/**
 * CU There Team
 * @component RegisterScreen - A screen for users to register
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from RegisterStack
 * PURPOSE: This screen imports RegisterForm
 */

// Import
import React from 'react';
import { Text, View } from 'react-native';
import RegisterForm from '../components/RegisterForm';
import Style from '../assets/style';

// Export register screen
export default function RegisterScreen() {
  return (
    <View style={Style.container2}>
      <Text style={Style.loginTitle}>Create your account</Text>
      <RegisterForm />
    </View>
  );
}
