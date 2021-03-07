// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export register form
export default function RegisterForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  function submitData() {
    /* eslint-disable no-undef */
    fetch(`https://${Source.heroku}/create`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    /* eslint-enable no-undef */
  }

  return (
    <View>
      <Text style={{ alignItems: 'flex-start' }}>Username:</Text>
      <TextInput
        style={Style.textInput}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
      />
      <Text style={{ alignItems: 'flex-start' }}>Password:</Text>
      <TextInput
        style={Style.textInput}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Text style={{ alignItems: 'flex-start' }}>CUHK link email:</Text>
      <TextInput
        style={Style.textInput}
        placeholder="CUHK link email"
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        title="Register"
        onPress={() => {
          console.log(
            `Register request sent with username ${username}, password ${password} and email ${email}`
          );
          submitData();
        }}
      />
    </View>
  );
}
