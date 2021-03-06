// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export register form
export default function RegisterForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

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
        onPress={() =>
          console.log(
            `Register request sent with username ${username}, password ${password} and email ${email}`
          )
        }
      />
    </View>
  );
}
