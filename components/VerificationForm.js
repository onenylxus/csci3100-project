// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export register form
export default function VerificationForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const { email } = route.params;
  const [code, setCode] = React.useState('');

  const status = React.useRef(0);

  async function resend() {
    await fetch(`https://${Source.heroku}/resend`, {
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
        if (status.current === 200) {
          return Alert.alert(
            'Email resent',
            'Another email has been sent to your email account.',
            [
              {
                text: 'OK',
                onPress: () => undefined,
                style: 'destructive',
              },
            ]
          );
        }
        if (status.current === 422) {
          if (res.error === 'expiredError') {
            return Alert.alert(
              'Error',
              'Your verification token has expired. Please restart the process.',
              [
                {
                  text: 'OK',
                  onPress: navigation.popToTop(),
                  style: 'destructive',
                },
              ]
            );
          }
        }
      })
      .catch((err) => console.log(err));
  }

  async function confirmToken() {
    await fetch(`https://${Source.heroku}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        code,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          switch (res.type) {
            case 'register':
              navigation.navigate('AddInfo', { email });
              break;

            case 'forgotPassword':
              navigation.navigate('ResetPassword', { email });
              break;

            default:
              return new Error();
          }
        } else {
          return Alert.alert(
            'Error',
            'Your verification code is invalid, please try again.',
            [
              {
                text: 'Retry',
                onPress: () => undefined,
                style: 'destructive',
              },
            ]
          );
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <View style={Style.codeInputBox}>
        <TextInput
          style={{ width: '100%', fontSize: 22 }}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <Text
        style={{ ...Style.hyperlink, alignItems: 'flex-end', margin: 8 }}
        onPress={resend}
      >
        Resend email
      </Text>
      <Button title="Confirm" onPress={confirmToken} />
    </View>
  );
}
