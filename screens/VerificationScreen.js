/**
 * CU There Team
 * @component VerificationScreen - A screen to perform verification process
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate from RegisterStack
 * PURPOSE: This screen imports VerificationForm
 */

// Import
import React from 'react';
import { Text, View } from 'react-native';
import Style from '../assets/style';
import VerificationForm from '../components/VerificationForm';

// Export register screen
export default function VerificationScreen() {
  return (
    <View style={Style.container}>
      <Text style={{ fontFamily: 'Roboto' }}>Your verification code:</Text>
      <VerificationForm />
    </View>
  );
}
