// Import
import React from 'react';
import { Button, Dimensions, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AuthContext from './AuthContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Source from '../assets/source';
import Style from '../assets/style';

// Export edit profile form
export default function EditProfileForm() {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [bio, setBio] = React.useState('');

  const status = React.useRef(0);

  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style of Small Screen
      switch (component) {
        case 'width':
          return '100%';

        case 'pickerWidth':
          return '100%';

        case 'scrollBar':
          return false;

        default:
          break;
      }
    }

    // Style of Large Screen
    switch (component) {
      case 'width':
        return 550;

      case 'pickerWidth':
        return 250;

      case 'scrollBar':
        return true;

      default:
        break;
    }
  }

  function fetchData() {
    (async () => {
      await getUser(setUsername);
      await console.log(username);
      await fetch(`https://${Source.heroku}/fetchData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
        }),
      })
        .then((res) => {
          status.current = res.status;
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          if (status.current === 200) {
            setGender(res.gender);
            setCollege(res.college);
            setName(res.name);
            setMajor(res.major);
            setBio(res.bio);
          } else if (status.current === 422) {
            console.log(res.error);
          }
        })
        .catch((err) => console.log(err));
    })();
  }

  async function submitData() {
    await fetch(`https://${Source.heroku}/editProfile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        name,
        gender,
        college,
        major,
        bio,
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
          navigation.navigate('Profile');
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchData);

  return (
    <View>
      {/* Profile picture */}
      <Text style={Style.sectionText}>Profile</Text>

      {/* Name */}
      <Text style={Style.sectionText}>Real name:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={Style.textInput}
          placeholder="Name"
          defaultValue={name}
          onChangeText={(text) => setName(text)}
        />
      </View>

      {/* Gender */}
      <Text style={Style.sectionText}>Gender:</Text>
      <RadioButton.Group
        onValueChange={(newValue) => setGender(newValue)}
        defaultValue={gender}
        value={gender}
      >
        <RadioButton.Item label="Male" value="M" />
        <RadioButton.Item label="Female" value="F" />
      </RadioButton.Group>

      {/* Major */}
      <MajorPicker callback={setMajor} value={major} />

      {/* College */}
      <CollegePicker callback={setCollege} value={college} />

      {/* Bio */}
      <Text style={Style.sectionText}>Bio:</Text>
      <TextInput
        style={{
          borderColor: '#000000',
          borderWidth: 1,
          backgroundColor: '#f8f8f8',
          height: 100,
          margin: 16,
          textAlign: 'left',
          textAlignVertical: 'top',
          width: styleByDevice(windowWidth, 'pickerWidth'),
          alignSelf: 'center',
        }}
        onChangeText={(text) => setBio(text)}
        defaultValue={bio}
        multiline
        enablesReturnKeyAutomatically
      />

      {/* Buttons */}
      <View style={Style.submitAndCancelButton}>
        <View style={{ margin: 20 }}>
          <Button title="Submit" onPress={submitData} />
        </View>
        <View style={{ margin: 20 }}>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
}
