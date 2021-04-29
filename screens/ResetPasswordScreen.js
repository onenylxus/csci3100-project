/**
 * CU There Team
 * @component ResetPasswordScreen - A screen to reset password
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
 * PURPOSE: This screen import ResetPasswordForm
 */

// Import
import React from 'react';
import { View } from 'react-native';
import ResetPasswordForm from '../components/ResetPasswordForm';
import Style from '../assets/style';

// Export reset password screen
export default function ForgotPasswordScreen() {
  return (
    <View style={Style.container}>
      <ResetPasswordForm />
    </View>
  );
}
