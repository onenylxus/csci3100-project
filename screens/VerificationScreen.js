// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export register screen
export default function VerificationScreen() {
  const [code, setCode] = React.useState('');

  function confirmCode() {
    console.log(code);
  }

  return (
    <View style={Style.container}>
      <Text>Your verification code:</Text>
      <TextInput
        style={Style.textInput}
        onChangeText={(text) => setCode(text)}
      />
      <Button title="Confirm" onPress={confirmCode} />
    </View>
  );
}
