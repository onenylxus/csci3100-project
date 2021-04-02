// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { RadioButton } from 'react-native-paper';
import { useNavigation, useRoute } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export Add info form
export default function AddInfoForm() {
  const navigation = useNavigation();
  const route = useRoute();

  const { username } = route.params;
  const [gender, setGender] = React.useState('');
  const [college, setCollege] = React.useState('');
  const [name, setName] = React.useState('');
  const [major, setMajor] = React.useState('');

  let status = 0;

  async function submitData() {
    await fetch(`https://${Source.heroku}/addInfo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
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
          navigation.navigate('Tabs', { username });
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
            onPress: submitData,
            style: 'destructive',
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
      <Text style={Style.sectionText}>Major:</Text>
      <View style={Style.SectionStyle}>
        <TextInput
          style={Style.textInput}
          placeholder="Major"
          onChangeText={(text) => setMajor(text)}
        />
      </View>
      {/* College */}
      <Text style={Style.sectionText}>College:</Text>
      <Picker
        selectedValue={college}
        onValueChange={(itemValue) => setCollege(itemValue)}
      >
        <Picker.Item label="Select a college" value="" />
        <Picker.Item label="New Asia College" value="NA" />
        <Picker.Item label="Chung Chi College" value="CC" />
        <Picker.Item label="United College" value="UC" />
        <Picker.Item label="Shaw College" value="SC" />
      </Picker>
      <Button title="Submit!" onPress={confirmAddInfo} />
    </View>
  );
}
