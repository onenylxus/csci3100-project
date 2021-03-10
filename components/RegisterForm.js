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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'cors',
      body: JSON.stringify({
        username, // letter+digit, length 4-20, filter (x)
        password, // letter+digit, length 6+, filter (x)
        email, // 1155xxxxxx@link.cuhk.edu.hk or xxx@link.cuhk.edu.hk
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    /* eslint-enable no-undef */
  }

  function verifyData() {
    // Check username
    if (!username.match(/[\w]{4,20}/)) {
      console.log('Invalid username');
      return;
    }

    // Check password31
    if (!password.match(/[\w]{6}\w*/)) {
      console.log('Invalid password');
      return;
    }

    // Check email
    if (!email.match(/1155[\d]{6}@(link\.)?cuhk\.edu\.hk/)) {
      console.log('Invalid email');
      return;
    }

    submitData();
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
          verifyData();
        }}
      />
    </View>
  );
}
