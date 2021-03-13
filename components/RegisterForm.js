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
  const [usernameState, setUsernameState] = React.useState(2);
  const [passwordState, setPasswordState] = React.useState(2);
  const [emailState, setEmailState] = React.useState(2);
  
  function submitData() {
    console.log(
      `Register request sent with username ${username}, password ${password} and email ${email}`
    );

    /* eslint-disable no-undef */
    fetch(`https://${Source.heroku}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // mode: 'cors',
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

  function changeUsername(text) {
    setUsername(text);
    setUsernameState(text.length > 0 ? /[\w]{4,20}/.test(text) : 2);
  }

  function changePassword(text) {
    setPassword(text);
    setPasswordState(text.length > 0 ? /[\w]{6}\w*/.test(text) : 2);
  }

  function changeEmail(text) {
    setEmail(text);
    setEmailState(text.length > 0 ? /1155[\d]{6}@(link\.)?cuhk\.edu\.hk/.test(text) : 2);
  }

  let validStyle = { ...Style.textInput, ...Style.validTextInput };
  let invalidStyle = { ...Style.textInput, ...Style.invalidTextInput };
  function styleByState(state) {
    return state === 2 ? Style.textInput : (!!state ? validStyle : invalidStyle);
  }

  return (
    <View>
      <Text style={{ alignItems: 'flex-start' }}>Username:</Text>
      <TextInput
        style={styleByState(usernameState)}
        placeholder="Username"
        onChangeText={(text) => changeUsername(text)}
      />
      <Text style={{ alignItems: 'flex-start' }}>Password:</Text>
      <TextInput
        style={styleByState(passwordState)}
        placeholder="Password"
        onChangeText={(text) => changePassword(text)}
      />
      <Text style={{ alignItems: 'flex-start' }}>CUHK link email:</Text>
      <TextInput
        style={styleByState(emailState)}
        placeholder="CUHK link email"
        onChangeText={(text) => changeEmail(text)}
      />
      <Button
        title="Register"
        onPress={() => (usernameState && passwordState && emailState) ? submitData() : console.log('Some input are invalid')}
      />
    </View>
  );
}
