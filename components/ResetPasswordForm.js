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
import Source from '../assets/source';
import Style from '../assets/style';

// Export reset password form
export default function ResetPasswordForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const [password, setPassword] = React.useState('');
  const [passwordState, setPasswordState] = React.useState(2);
  const [visibility, setVisibility] = React.useState(true);
  const { email } = route.params;

  let status = 0;

  async function submitData() {
    await fetch(`https://${Source.heroku}/resetPassword`, {
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
        status = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status === 200) {
          navigation.navigate('Login');
        } else if (status === 422) {
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
  return (
    <View>
      <Text>Please enter your new password: </Text>
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
