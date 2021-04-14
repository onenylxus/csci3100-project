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
import { useNavigation } from '@react-navigation/native';
import {
  faUser,
  faLock,
  faEyeSlash,
  faEye,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Style from '../assets/style';

// Export register form
export default function RegisterForm() {
  const navigation = useNavigation();

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [usernameState, setUsernameState] = React.useState(2);
  const [passwordState, setPasswordState] = React.useState(2);
  const [emailState, setEmailState] = React.useState(2);
  const [visibility, setVisibility] = React.useState(true);

  const status = React.useRef(0);

  const windowWidth = Dimensions.get('window').width;

  async function submitData() {
    console.log(
      `Register request sent with username ${username}, password ${password} and email ${email}`
    );
    await fetch('https://cu-there-server.herokuapp.com/register', {
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
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          navigation.navigate('Verification', { email });
        } else if (status.current === 422) {
          switch (res.error) {
            // Username error
            case 'clientUsernameError':
            case 'tokenUsernameError':
              return Alert.alert(
                'Error',
                'Your username has been registered by another user, please try again.',
                [
                  {
                    text: 'Retry',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            // Email error
            case 'clientEmailError':
            case 'tokenEmailError':
              return Alert.alert(
                'Error',
                'This email has been registered by another user, please try again.',
                [
                  {
                    text: 'Retry',
                    onPress: () => undefined,
                    style: 'destructive',
                  },
                ]
              );

            // Unknown error
            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  async function confirmRegister() {
    if (usernameState % 2 && passwordState % 2 && emailState % 2) {
      submitData();
    } else {
      return Alert.alert(
        'Some input are invald',
        'Some of your inputs above are invalid. Please try again.',
        [
          {
            text: 'Retry',
            onPress: () => undefined,
            style: 'destructive',
          },
        ]
      );
    }
  }

  function changeUsername(text) {
    setUsername(text);
    setUsernameState(text.length > 0 ? /^\w{4,20}$/.test(text) : 2);
  }

  function changePassword(text) {
    setPassword(text);
    setPasswordState(text.length > 0 ? /^\w{6}\w*$/.test(text) : 2);
  }

  function changeEmail(text) {
    setEmail(text);
    setEmailState(
      text.length > 0 ? /^1155\d{6}@(link\.)?cuhk\.edu\.hk$/.test(text) : 2
    );
  }

  function styleByState(state) {
    return state === 2
      ? Style.SectionStyle
      : state
      ? Style.validTextInput
      : Style.invalidTextInput;
  }

  return (
    <View
      style={{
        ...Style.Container,
        width: windowWidth,
        alignSelf: 'center',
      }}
    >
      {/* Username */}
      <View style={Style.inputContainer}>
        <Text style={Style.sectionText}>Username:</Text>
        <View style={{ ...Style.SectionStyle, ...styleByState(usernameState) }}>
          <FontAwesomeIcon
            icon={faUser}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            style={{ minWidth: '85%', maxWidth: '85%' }}
            placeholder="Username"
            onChangeText={(text) => changeUsername(text)}
          />
        </View>
        <View
          style={{
            opacity: !usernameState * 100,
            minWidth: '80%',
            maxWidth: '80%',
            marginLeft: '12%',
          }}
        >
          <Text style={Style.errorMessage}>
            Username must be of length 4-20 characters
          </Text>
        </View>

        {/* Password */}

        <Text style={Style.sectionText}>Password:</Text>
        <View style={{ ...Style.SectionStyle, ...styleByState(passwordState) }}>
          <FontAwesomeIcon
            icon={faLock}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            style={{ minWidth: '77%', maxWidth: '77%' }}
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
        <View
          style={{
            opacity: !passwordState * 100,
            minWidth: '80%',
            maxWidth: '80%',
            marginLeft: '12%',
          }}
        >
          <Text style={Style.errorMessage}>
            Password must be of length greater than 6 characters
          </Text>
        </View>

        {/* Email */}

        <Text style={Style.sectionText}>CUHK link email:</Text>
        <View style={{ ...Style.SectionStyle, ...styleByState(emailState) }}>
          <FontAwesomeIcon
            icon={faEnvelope}
            size={15}
            style={{ marginHorizontal: 5, marginVertical: 12 }}
          />
          <TextInput
            style={{ minWidth: '85%', maxWidth: '85%' }}
            placeholder="CUHK link email"
            onChangeText={(text) => changeEmail(text)}
          />
        </View>
        <View
          style={{
            opacity: !emailState * 100,
            minWidth: '80%',
            maxWidth: '80%',
            marginLeft: '12%',
          }}
        >
          <Text style={Style.errorMessage}>
            Email must be a CUHK link email address (example:
            1155123456@link.cuhk.edu.hk)
          </Text>
        </View>
      </View>
      <View style={{ marginHorizontal: '30%' }}>
        <Button title="Register" onPress={confirmRegister} />
      </View>
    </View>
  );
}
