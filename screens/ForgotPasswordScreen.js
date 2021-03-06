// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export forgot password screen
export default function ForgotPasswordScreen() {
  const [email, setEmail] = React.useState('');

  return (
    <View style={Style.container}>
      <Text>
        Enter your verified CUHK Link Email. We will send you a link. Please
        click the link to reset your password.
      </Text>
      <TextInput
        style={Style.textInput}
        placeholder="CUHK link Email"
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        title="Submit"
        color="gray"
        accessibilityLabel="Submit Your New Password"
        onPress={() => console.log(`Register request sent with email ${email}`)}
      />
    </View>
  );
}
