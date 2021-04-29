/**
 * CU There Team
 * @Component ResetPasswordForm - Prompts user's new password
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Will be used by the Reset password screen
 * PURPOSE: Ask for user information and blocks invalid input to controller
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
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Style from '../assets/style';

// Export reset password form
export default function ResetPasswordForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const [password, setPassword] = React.useState('');
  const [passwordState, setPasswordState] = React.useState(2);
  const [visibility, setVisibility] = React.useState(true);
  const { email } = route.params;

  const status = React.useRef(0);

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/resetPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          navigation.navigate('Login');
        } else if (status.current === 422) {
          switch (res.error) {
            // Duplicate password
            case 'duplicatePasswordError':
              return Alert.alert(
                'Password duplicated',
                'Your new password seems to be your old password, do you still want to change your password?',
                [
                  {
                    text: 'No',
                    onPress: () => navigation.navigate('Login'),
                    style: 'cancel',
                  },
                  {
                    text: 'Yes',
                    onPress: () => undefined,
                    style: 'cancel',
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

  function changePassword(text) {
    setPassword(text);
    setPasswordState(text.length > 0 ? /^\w{6}\w*$/.test(text) : 2);
  }

  const validStyle = { ...Style.validTextInput };
  const invalidStyle = { ...Style.invalidTextInput };
  function styleByState(state) {
    return state === 2 ? Style.textInput : state ? validStyle : invalidStyle;
  }

  React.useEffect(() => {
    const back = navigation.addListener('beforeRemove', (e) => {
      if (status !== 200) {
        e.preventDefault();
      }
      back();

      Alert.alert(
        'Abort confirmation',
        'If you leave this screen, you have to start over your current request. Are you sure you want to do this?',
        [
          {
            text: 'No',
            style: 'cancel',
            onPress: () => undefined,
          },
          {
            text: 'Yes',
            style: 'destructive',
            onPress: async () => {
              await fetch('https://cu-there-server.herokuapp.com/abort', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email,
                }),
              })
                .then((res) => {
                  status.current = res.status;
                  return res;
                })
                .then((res) => res.json())
                .then(() => {
                  navigation.navigate('Login');
                });
            },
          },
        ]
      );
    });
  }, [email, navigation]);

  return (
    <View>
      <Text style={{ ...Style.sectionText, marginLeft: '2%' }}>
        Please enter your new password:{' '}
      </Text>
      <View style={{ ...Style.SectionStyle, ...styleByState(passwordState) }}>
        <FontAwesomeIcon
          icon={faLock}
          size={15}
          style={{ marginHorizontal: 5, marginVertical: 12 }}
        />
        <TextInput
          style={{ width: 175 }}
          placeholder="Password"
          onChangeText={(text) => changePassword(text)}
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
      <Button
        title="Submit"
        color="gray"
        accessibilityLabel="Submit Password"
        onPress={submitData}
      />
    </View>
  );
}
