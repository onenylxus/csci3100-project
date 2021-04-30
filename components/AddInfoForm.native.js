/**
 * CU There Team
 * @component AddInfoForm - User can update its client database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigate from VerificationScreen
 * PURPOSE: This module provide a form for users who just registered to fill
 * in some important information like real name, gender, major and college
 * This is the native version of the module
 */

// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AppContext from './AppContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Style from '../assets/style';

// Export AddInfoForm
export default function AddInfoForm() {
  const navigation = useNavigation();

  const route = useRoute();
  const { login } = React.useContext(AppContext);

  const { email } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  const status = React.useRef(0);
  const username = React.useRef('');

  // Handle submitted data in Add Info page
  const submitData = React.useCallback(async () => {
    await fetch('https://cu-there-server.herokuapp.com/addInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        gender,
        college,
        name,
        major,
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
          username.current = res.username;
          login({ username: username.current });
        }
      })
      .catch((err) => console.log(err));
  }, [college, email, gender, login, major, name]);

  // Check for missing data and alert
  async function confirmAddInfo() {
    if ([gender, college, name, major].every((data) => data.length > 0)) {
      submitData();
    } else {
      return Alert.alert(
        'Some information are missing',
        'Some fields are missing, do you want to continue without these information? (You can edit these information in the application later.)',
        [
          {
            text: 'Cancel',
            onPress: () => undefined,
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: submitData,
            style: 'cancel',
          },
        ]
      );
    }
  }

  // Continue to submit data
  React.useEffect(() => {
    const back = navigation.addListener('beforeRemove', (e) => {
      if (status !== 200) {
        e.preventDefault();
      }
      back();

      Alert.alert(
        'Continue',
        'Do you want to continue? (You can edit these information in the application later.)',
        [
          {
            text: 'Cancel',
            onPress: () => undefined,
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: submitData,
            style: 'cancel',
          },
        ]
      );
    });
  }, [navigation, submitData]);

  return (
    <View>
      {/* Name */}
      <Text style={Style.sectionText}>Name:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={Style.textInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
          testID="name"
        />
      </View>

      {/* Gender */}
      <View>
        <Text style={Style.sectionText}>Gender:</Text>
        <View style={{ margin: '5%' }}>
          <RadioButton.Group
            onValueChange={(newValue) => setGender(newValue)}
            value={gender}
          >
            <RadioButton.Item
              style={Style.sectionText}
              label="Male"
              value="M"
            />
            <RadioButton.Item
              style={Style.sectionText}
              label="Female"
              value="F"
            />
          </RadioButton.Group>
        </View>
      </View>

      {/* Major */}
      <MajorPicker callback={setMajor} value={major} />

      {/* College */}
      <CollegePicker callback={setCollege} value={college} />

      <Button title="Submit!" onPress={confirmAddInfo} />
    </View>
  );
}
