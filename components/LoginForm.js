// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

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
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Login"
        onPress={() =>
          console.log(
            `Login request sent with username ${username} and password ${password}`
          )
        }
      />
    </View>
  );
}
