// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from './AuthContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Style from '../assets/style';

// Export add info form
export default function AddInfoForm() {
  const navigation = useNavigation();
  const route = useRoute();
  const { login } = React.useContext(AuthContext);

  const { email } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  const status = React.useRef(0);
  const username = React.useRef('');

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

  React.useEffect(() => {
    const back = navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
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
            <RadioButton.Item label="Male" value="M" />
            <RadioButton.Item label="Female" value="F" />
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
