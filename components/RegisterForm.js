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

  async function submitData() {
    console.log(
      `Register request sent with username ${username}, password ${password} and email ${email}`
    );

    /* eslint-disable no-undef */
    await fetch(`https://${Source.heroku}/createClient`, {
      method: 'POST',
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

    await fetch(`https://${Source.heroku}/sendEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    /* eslint-enable no-undef */
  }

  function confirmRegister() {
    if (usernameState % 2 && passwordState % 2 && emailState % 2) {
      submitData();
    } else {
      console.log('Some input are invalid');
    }
  }

  function changeUsername(text) {
    setUsername(text);
    setUsernameState(text.length > 0 ? /^[\w]{4,20}$/.test(text) : 2);
  }

  function changePassword(text) {
    setPassword(text);
    setPasswordState(text.length > 0 ? /^[\w]{6}\w*$/.test(text) : 2);
  }

  function changeEmail(text) {
    setEmail(text);
    setEmailState(
      text.length > 0 ? /^1155[\d]{6}@(link\.)?cuhk\.edu\.hk$/.test(text) : 2
    );
  }

  const validStyle = { ...Style.textInput, ...Style.validTextInput };
  const invalidStyle = { ...Style.textInput, ...Style.invalidTextInput };
  function styleByState(state) {
    return state === 2 ? Style.textInput : state ? validStyle : invalidStyle;
  }

  return (
    <View>
      {/* Username */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Username:</Text>
        <TextInput
          style={styleByState(usernameState)}
          placeholder="Username"
          onChangeText={(text) => changeUsername(text)}
        />
        <View style={{ opacity: !usernameState * 100 }}>
          <Text style={Style.errorMessage}>
            Username must be of length 4-20 characters
          </Text>
        </View>
      </View>

      {/* Password */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Password:</Text>
        <TextInput
          style={styleByState(passwordState)}
          placeholder="Password"
          onChangeText={(text) => changePassword(text)}
        />
        <View style={{ opacity: !passwordState * 100 }}>
          <Text style={Style.errorMessage}>
            Password must be of length greater than 6 characters
          </Text>
        </View>
      </View>

      {/* Email */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>CUHK link email:</Text>
        <TextInput
          style={styleByState(emailState)}
          placeholder="CUHK link email"
          onChangeText={(text) => changeEmail(text)}
        />
        <View style={{ opacity: !emailState * 100 }}>
          <Text style={Style.errorMessage}>
            Email must be a CUHK link email address (example:
            1155123456@cuhk.link.edu.hk)
          </Text>
        </View>
      </View>

      <Button title="Register" onPress={confirmRegister} />
    </View>
  );
}
