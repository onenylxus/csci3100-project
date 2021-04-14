// Import
import React from 'react';
import { Button, Dimensions, Text, TextInput, View } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AppContext from './AppContext';
import CollegePicker from './CollegePicker';
import MajorPicker from './MajorPicker';
import Style from '../assets/style';

// Export edit profile form
export default function EditProfileForm() {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [bio, setBio] = React.useState('');

  const fetched = React.useRef(false);
  const status = React.useRef(0);

  const windowWidth = Dimensions.get('window').width;

  function fetchData() {
    (async () => {
      if (!fetched.current) {
        await getUser(setUsername);
        await fetch('https://cu-there-server.herokuapp.com/fetchData', {
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
              fetched.current = true;
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/editProfile', {
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

  // Hide Outline of Textinput Box
  function hideOutline(screenWidth) {
    if (screenWidth < 800) {
      return null;
    }
    return { outline: 'none' };
  }

  return (
    <View>
      {/* Profile picture */}
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          paddingVertical: 10,
        }}
      >
        <Text style={Style.sectionText}>Profile</Text>
      </View>

      {/* Name */}
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          paddingVertical: 10,
        }}
      >
        <Text style={Style.sectionText}>Real name:</Text>
        <View style={Style.SectionStyle}>
          <TextInput
            style={{
              ...hideOutline(windowWidth),
              maxWidth: '100%',
              minWidth: '100%',
            }}
            placeholder="Name"
            defaultValue={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
      </View>

      {/* Gender */}
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          paddingVertical: 10,
        }}
      >
        <Text style={Style.sectionText}>Gender:</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setGender(newValue)}
          defaultValue={gender}
          value={gender}
        >
          <RadioButton.Item style={Style.sectionText} label="Male" value="M" />
          <RadioButton.Item
            style={Style.sectionText}
            label="Female"
            value="F"
          />
        </RadioButton.Group>
      </View>

      {/* Major */}
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          paddingVertical: 10,
        }}
      >
        <MajorPicker callback={setMajor} value={major} />
      </View>

      {/* College */}
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#dcdcdc',
          paddingVertical: 10,
        }}
      >
        <CollegePicker callback={setCollege} value={college} />
      </View>

      {/* Bio */}
      <Text style={Style.pickerTitle}>Bio:</Text>
      <View style={{ maxWidth: '75%', minWidth: '75%', alignSelf: 'center' }}>
        <TextInput
          style={Style.combineStyle}
          onChangeText={(text) => setBio(text)}
          defaultValue={bio}
          multiline
          enablesReturnKeyAutomatically
        />
      </View>

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
