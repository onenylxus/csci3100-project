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

  const { username } = route.params;
  const [code, setCode] = React.useState('');

  async function confirmToken() {
    await fetch(`https://${Source.heroku}/verify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        code,
      }),
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigation.navigate('AddInfo', { username });
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
    <View style={Style.inputContainer}>
      <TextInput
        style={Style.textInput}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Confirm" onPress={confirmToken} />
    </View>
  );
}
