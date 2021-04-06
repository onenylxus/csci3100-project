// Import
import React from 'react';
import { Alert, Button, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export forgot password form
export default function ForgotPasswordForm() {
  const navigation = useNavigation();

  const [email, setEmail] = React.useState('');

  const status = React.useRef(0);

  async function submitData() {
    await fetch(`https://${Source.heroku}/forgotPassword`, {
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
          switch (res.error) {
            // Empty title
            case 'wrongEmailError':
              return Alert.alert(
                'Email does not exist',
                'Please enter a registered email.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            case 'tokenEmailError':
              return Alert.alert(
                'Error',
                'Somebody is using the same email to request a change in password.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <TextInput
        style={Style.textInput}
        placeholder="CUHK link Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        title="Submit"
        color="gray"
        accessibilityLabel="Submit Email"
        onPress={submitData}
      />
    </View>
  );
}
