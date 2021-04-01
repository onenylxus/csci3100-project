// Import
import React from 'react';
import {
  View,
  Button,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import CollegePicker from '../components/CollegePicker';
import MajorPicker from '../components/MajorPicker';
import Style from '../assets/style';

// Export EditProfile screen

export default function EditProfileScreen({ navigation }) {
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

  return (
    <View style={Style.container}>
      <ScrollView
        showsVerticalScrollIndicator={styleByDevice(windowWidth, 'scrollBar')}
      >
        <Text style={{ fontSize: 28, alignSelf: 'center' }}>
          Edit Your Profile
        </Text>
        <View
          style={{
            flexDirection: 'column',
            width: styleByDevice(windowWidth, 'width'),
          }}
        >
          <CollegePicker />
        </View>
        <View
          style={{
            flexDirection: 'column',
            width: styleByDevice(windowWidth, 'width'),
          }}
        >
          <MajorPicker />
        </View>
        <View
          style={{
            marginVertical: 40,
            flexDirection: 'column',
            width: styleByDevice(windowWidth, 'width'),
          }}
        >
          <Text>Bio: </Text>
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
            multiline
            enablesReturnKeyAutomatically
          />
        </View>
        <View style={{ flexDirection: 'row', margin: 20 }}>
          <View style={{ margin: 20 }}>
            <Button
              title="Submit"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
          <View style={{ margin: 20 }}>
            <Button
              title="Cancel"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
