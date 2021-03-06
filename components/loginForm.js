// Import
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <TextInput
        style={Style.textInput}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={Style.textInput}
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Login"
        onPress={() =>
          console.log(
            `Login request sent with email ${email} and password ${password}`
          )
        }
      />
    </View>
  );
}
