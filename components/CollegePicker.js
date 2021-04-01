// Import
import React, { useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';

// Export College Picker

export default function CollegePicker() {
  const [selectedCollege, setSelectedCollege] = useState();
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style of Small Screen
      switch (component) {
        case 'width':
          return '100%';

        case 'pickerWidth':
          return '100%';

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

      default:
        break;
    }
  }

  return (
    <View>
      {/* College */}
      <View
        style={{
          marginVertical: 40,
          flexDirection: 'column',
          width: styleByDevice(windowWidth, 'width'),
        }}
      >
        <Text>College: {selectedCollege}</Text>
        <View>
          <Picker
            style={{
              width: styleByDevice(windowWidth, 'pickerWidth'),
              alignSelf: 'center',
            }}
            selectedValue={selectedCollege}
            onValueChange={(itemValue) => setSelectedCollege(itemValue)}
          >
            <Picker.Item label="Select an option" value="Select an option" />
            <Picker.Item label="Chung Chi College" value="Chung Chi College" />
            <Picker.Item label="New Asia College" value="New Asia College" />
            <Picker.Item label="United College" value="United College" />
            <Picker.Item label="Shaw College" value="Shaw College" />
            <Picker.Item
              label="Morningside College"
              value="Morningside College"
            />
            <Picker.Item label="S.H. Ho College" value="S.H. Ho College" />
            <Picker.Item label="CW Chu College" value="CW Chu College" />
            <Picker.Item
              label="Wu Yee Sun College"
              value="Wu Yee Sun College"
            />
            <Picker.Item
              label="Lee Wo Sing College"
              value="Lee Wo Sing College"
            />
          </Picker>
        </View>
      </View>
    </View>
  );
}
