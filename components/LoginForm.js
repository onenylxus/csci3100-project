/**
 * CU There Team
 * @component LoginForm - Prompts username and password to proceed login process
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in LoginScreen
 * PURPOSE: Performs check of whether the user exists and blocks wrong entry
 */

// Import
import React from 'react';
import {
  Alert,
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUser,
  faLock,
  faEyeSlash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from './AppContext';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const { login } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visibility, setVisibility] = React.useState(true);

  const windowWidth = Dimensions.get('window').width;
  const loginFormWidth = Math.min(windowWidth, 400);

  const status = React.useRef(0);

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/login', {
      method: 'POST',
      mode: 'cors',
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

  // Hide Outline of Textinput Box
  function hideOutline(screenWidth) {
    if (screenWidth < 800) {
      return null;
    }
    return { outline: 'none' };
  }

  return (
    <View
      style={{ ...Style.Container, width: loginFormWidth, alignSelf: 'center' }}
    >
      {/* Username */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Username:</Text>
        <View style={Style.SectionStyle}>
          <FontAwesomeIcon
            icon={faUser}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12, width: '50%' }}
          />
          <TextInput
            placeholder="Username"
            value={username}
            style={{
              minWidth: '85%',
              maxWidth: '85%',
              ...hideOutline(windowWidth),
            }}
            onChangeText={(text) => setUsername(text)}
            testID="username"
          />
        </View>

        {/* Password */}
        <Text style={Style.sectionText}>Password:</Text>
        <View style={Style.SectionStyle}>
          <FontAwesomeIcon
            icon={faLock}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12, width: '50%' }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            style={{
              minWidth: '77%',
              maxWidth: '77%',
              ...hideOutline(windowWidth),
            }}
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
      <View style={{ marginHorizontal: '40%' }}>
        <Button
          title="Login"
          onPress={confirmLogin}
          style={{ fontFamily: 'Roboto' }}
          testID="login"
        />
      </View>
    </View>
  );
}
