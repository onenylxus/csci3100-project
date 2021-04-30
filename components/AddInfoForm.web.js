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
 * PURPOSE: This module provides a form for users who just registered to fill
 * in some important information like real name, gender, major and college
 * This is the web version of the module
 */

// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import AppContext from './AppContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Style from '../assets/style';

// Export add info form
export default function AddInfoForm() {
  const navigation = useNavigation();

  const route = useRoute();
  const { login } = React.useContext(AppContext);

  const { email } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  const [showAlert, setShowAlert] = React.useState(false);

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

  // Alert for missing data
  async function confirmAddInfo() {
    if ([gender, college, name, major].every((data) => data.length > 0)) {
      submitData();
    } else {
      return setShowAlert(true);
    }
  }

  // Continue to submit data
  React.useEffect(() => {
    const back = navigation.addListener('beforeRemove', (e) => {
      if (status !== 200) {
        e.preventDefault();
      }
      back();
    });
  }, [navigation, submitData]);

  return (
    <View>
      {/* Name */}
      <Text style={Style.sectionText}>Name:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={{ minWidth: '100%', maxWidth: '100%', outline: 'none' }}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Some information are missing"
        message="Some fields are missing, please fill in all of them."
        closeOnHardwareBackPress
        closeOnTouchOutside
        showConfirmButton
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        contentContainerStyle={100}
      />
    </View>
  );
}
