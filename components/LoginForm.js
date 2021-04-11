// Import
import React from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faLock,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import AuthContext from './AuthContext';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const { login } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visibility, setVisibility] = React.useState(true);

  const status = React.useRef(0);

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          login({ username });
        } else if (status.current === 422) {
          switch (res.error) {
            case 'accountError':
              return Alert.alert(
                'Account does not exist',
                'We could not find an account with this username, please try again.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'destructive',
                  },
                ]
              );

            case 'passwordError':
              return Alert.alert(
                'Wrong password',
                'The password you provided is incorrect. Please try again.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'destructive',
                  },
                ]
              );

            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  async function confirmLogin() {
    if ([username, password].every((data) => data.length > 0)) {
      console.log(
        `Login request sent with username ${username} and password ${password}`
      );
      submitData();
    } else {
      return Alert.alert(
        'Some information are missing',
        'Some fields are missing. Fill out all fields and try again.',
        [
          {
            text: 'OK',
            onPress: () => undefined,
            style: 'destructive',
          },
        ]
      );
    }
  }

  return (
    <View>
      {/* Username */}
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
            value={username}
            style={{ width: 190 }}
            onChangeText={(text) => setUsername(text)}
            testID="username"
          />
        </View>
      </View>
      {/* Password */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Password:</Text>
        <View style={Style.SectionStyle}>
          <FontAwesomeIcon
            icon={faLock}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            style={{ width: 165 }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={visibility}
            clearTextOnFocus={false}
            enablesReturnKeyAutomatically
            testID="password"
          />
          <TouchableOpacity
            onPress={() => setVisibility(!visibility)}
            testID="eye"
          >
            <FontAwesomeIcon
              icon={visibility ? faEyeSlash : faEye}
              size={15}
              style={{ marginHorizontal: 5, marginVertical: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Login" onPress={confirmLogin} testID="login" />
    </View>
  );
}
