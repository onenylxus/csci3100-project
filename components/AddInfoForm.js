// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import AuthContext from './AuthContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Source from '../assets/source';
import Style from '../assets/style';

// Export add info form
export default function AddInfoForm() {
  const route = useRoute();
  const { login } = React.useContext(AuthContext);

  const { email } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  let status = 0;
  let username = '';

  async function submitData() {
    await fetch(`https://${Source.heroku}/addInfo`, {
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
        status = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status === 200) {
          username = res.username;
          login({ username });
        }
      })
      .catch((err) => console.log(err));
  }

  async function confirmAddInfo() {
    if ([gender, college, name, major].every((data) => data.length > 0)) {
      submitData();
    } else {
      return Alert.alert(
        'Some information are missing',
        'Some fields are missing, do you want to continue without these information? (You can edit these informations in the application later.)',
        [
          {
            text: 'Cancel',
            onPress: () => undefined,
            style: 'cancel',
          },
          {
            text: 'Continue',
            onPress: () => submitData(),
            style: 'cancel',
          },
        ]
      );
    }
  }

  return (
    <View>
      {/* Name */}
      <Text style={Style.sectionText}>Name:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={Style.textInput}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Gender */}
      <Text style={Style.sectionText}>Gender:</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        value={gender}
      >
        <RadioButton.Item label="Male" value="M" />
        <RadioButton.Item label="Female" value="F" />
      </RadioButton.Group>

      {/* Major */}
      <MajorPicker callback={setMajor} />

      {/* College */}
      <CollegePicker callback={setCollege} />

      <Button title="Submit!" onPress={confirmAddInfo} />
    </View>
  );
}
