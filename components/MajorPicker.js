// Import
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';
import MajorList from '../assets/json/majorList.json';
import Style from '../assets/style';

// Export major picker
export default function MajorPicker({ callback, value }) {
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
        return '75%';

      default:
        break;
    }
  }

  return (
    <View>
      {/* Major */}
      <View
        style={{
          // marginVertical: '1%',
          flexDirection: 'column',
          width: styleByDevice(windowWidth, 'width'),
        }}
      >
        <Text style={Style.pickerTitle}>Major:</Text>
        <View>
          <Picker
            style={{
              width: styleByDevice(windowWidth, 'pickerWidth'),
              alignSelf: 'center',
            }}
            selectedValue={value}
            onValueChange={(itemValue) => callback(itemValue)}
          >
            {[
              <Picker.Item label="Choose a major" value="" key="" />,
              ...Object.keys(MajorList).map((item) => (
                <Picker.Item label={MajorList[item]} value={item} key={item} />
              )),
            ]}
          </Picker>
        </View>
      </View>
    </View>
  );
}
