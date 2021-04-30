/**
 * CU There Team
 * @component ForgotPasswordForm - Prompts user email to proceed forgot password process, checks with database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in ForgotPasswordScreen
 * PURPOSE: This module updates client database
 * This is the web version of the module.
 */

// Import
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import Style from '../assets/style';

// Export forgot password form
export default function ForgotPasswordForm() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');

  const [showAlert, setShowAlert] = React.useState(false);

  const status = React.useRef(0);

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/forgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          navigation.navigate('Verification', { email });
        } else if (status.current === 422) {
          setShowAlert(true);
        }
      })
      .catch((err) => console.log(err));
  }

  function hideOutline() {
    return { outline: 'none' };
  }

  return (
    <View>
      <View style={Style.SectionStyle}>
        <FontAwesomeIcon
          icon={faEnvelope}
          size={15}
          style={{ marginHorizontal: 5, marginVertical: 12 }}
        />
        <TextInput
          style={{
            width: '85%',
            alignSelf: 'center',
            ...hideOutline(),
          }}
          placeholder="CUHK link Email"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={{ maxWidth: '40%', alignSelf: 'center' }}>
        <Button
          title="Submit"
          accessibilityLabel="Submit Email"
          onPress={submitData}
        />
      </View>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Email error"
        message="Please enter a registered email."
        closeOnHardwareBackPress
        closeOnTouchOutside
        showConfirmButton
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        contentContainerStyle={100}
      />
    </View>
  );
}
