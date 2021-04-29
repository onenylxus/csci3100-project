/**
 * CU There Team
 * @Component ForgotPasswordScreen - A screen which provide a ForgotPasswordForm for users to reset password
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from ForgotPasswordStack
 *
 * PURPOSE: This is the ForgotPasswordScreen in which users can reset their password by providing the CUHK link email
 */

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
