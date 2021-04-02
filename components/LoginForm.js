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
import { useNavigation } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export login form
export default function LoginForm() {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visibility, setVisibility] = React.useState(true);

  let status = 0;

  async function submitData() {
    await fetch(`https://${Source.heroku}/login`, {
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
        status = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status === 200) {
          console.log(res.msg);
          navigation.navigate('Tabs', { username });
        } else if (status === 422) {
          console.log(res.error);
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
            style={{ width: 200 }}
            onChangeText={(text) => setUsername(text)}
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
            style={{ width: 175 }}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={visibility}
            clearTextOnFocus={false}
            enablesReturnKeyAutomatically
          />
          <TouchableOpacity onPress={() => setVisibility(!visibility)}>
            <FontAwesomeIcon
              icon={visibility ? faEyeSlash : faEye}
              size={15}
              style={{ marginHorizontal: 5, marginVertical: 12 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Button title="Login" onPress={confirmLogin} />
    </View>
  );
}
