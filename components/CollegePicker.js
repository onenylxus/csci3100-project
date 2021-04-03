// Import
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';

// Export College Picker

export default function CollegePicker() {
  const [college, setCollege] = React.useState();
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
        <Text>College: {college}</Text>
        <View>
          <Picker
            style={{
              width: styleByDevice(windowWidth, 'pickerWidth'),
              alignSelf: 'center',
            }}
            selectedValue={college}
            onValueChange={(itemValue) => setCollege(itemValue)}
          >
            <Picker.Item label="Select an option" value="" />
            <Picker.Item label="Chung Chi College" value="CC" />
            <Picker.Item label="New Asia College" value="NA" />
            <Picker.Item label="United College" value="UC" />
            <Picker.Item label="Shaw College" value="SC" />
            <Picker.Item label="Morningside College" value="MC" />
            <Picker.Item label="S.H. Ho College" value="SH" />
            <Picker.Item label="CW Chu College" value="WC" />
            <Picker.Item label="Wu Yee Sun College" value="YS" />
            <Picker.Item label="Lee Wo Sing College" value="WS" />
          </Picker>
        </View>
      </View>
    </View>
  );
}
