// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Style from '../assets/style';

// Export register form
export default function VerificationForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const { email } = route.params;
  const [code, setCode] = React.useState('');
  const windowWidth = Dimensions.get('window').width;

  const status = React.useRef(0);

  async function confirmToken() {
    await fetch('https://cu-there-server.herokuapp.com/verify', {
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

  async function resend() {
    await fetch('https://cu-there-server.herokuapp.com/resend', {
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
                  onPress: () => navigation.navigate('Login'),
                  style: 'destructive',
                },
              ]
            );
          }
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    const back = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      back();

      Alert.alert(
        'Abort confirmation',
        'If you leave this screen, you have to start over your current request. Are you sure you want to do this?',
        [
          {
            text: 'No',
            style: 'cancel',
            onPress: () => undefined,
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: async () => {
              await fetch('https://cu-there-server.herokuapp.com/abort', {
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
                .then(() => {
                  navigation.navigate('Login');
                });
            },
          },
        ]
      );
    });
  }, [email, navigation]);

  // Small Screen
  if (windowWidth < 800) {
    return (
      <View style={{ alignContent: 'center' }}>
        <View style={Style.codeInputBox}>
          <TextInput
            style={Style.verificationCode}
            onChangeText={(text) => setCode(text)}
          />
        </View>
        <Text
          style={{
            ...Style.hyperlink,
            marginHorizontal: '6%',
            alignSelf: 'center',
          }}
          onPress={resend}
        >
          Resend email
        </Text>
        <Button title="Confirm" onPress={confirmToken} />
      </View>
    );
  }

  // Large Screen
  return (
    <View style={{ alignContent: 'center', width: 600 }}>
      <View style={Style.codeInputBoxPC}>
        <TextInput
          style={Style.verificationCodePC}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <Text
        style={{
          ...Style.hyperlink,
          marginHorizontal: '6%',
          alignSelf: 'center',
        }}
        onPress={resend}
      >
        Resend email
      </Text>
      <View style={{ maxWidth: '40%', alignSelf: 'center' }}>
        <Button title="Confirm" onPress={confirmToken} />
      </View>
    </View>
  );
}
