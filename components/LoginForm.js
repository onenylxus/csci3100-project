// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser, faUnlock } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View>
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Username:</Text>
        <View style={Style.SectionStyle}>
          <FontAwesomeIcon
            icon={faUser}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            placeholder="Username"
            style={{ outline: 'none', width: 175 }}
            onChangeText={(text) => setUsername(text)}
          />
        </View>
      </View>
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Password:</Text>
        <View style={Style.SectionStyle}>
          <FontAwesomeIcon
            icon={faUnlock}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            placeholder="Password"
            style={{ outline: 'none', width: 175 }}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
          />
        </View>
      </View>
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
