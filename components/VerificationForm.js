// Import
import React from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
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
      <View style={Style.inputContainer}>
        <TextInput
          style={Style.textInput}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <Button title="Confirm" onPress={confirmToken} />
    </View>
  );
}
