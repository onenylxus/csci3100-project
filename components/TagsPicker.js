// Import
import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Picker } from '@react-native-community/picker';
import Style from '../assets/style';
import TagsList from '../assets/json/tagsList.json';

// Export tag picker
export default function TagPicker({ callback, value }) {
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 800) {
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
        return 600;

      case 'pickerWidth':
        return 600;

      default:
        break;
    }
  }

  return (
    <View>
      {/* Tag */}
      <View
        style={{
          flexDirection: 'column',
          width: styleByDevice(windowWidth, 'width'),
        }}
      >
        <View style={Style.tagsTitle}>
          <Text style={{ alignSelf: 'flex-start', paddingLeft: '6%' }}>
            Tag:{' '}
          </Text>
        </View>
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
              <Picker.Item label="Choose a channel" value="" key="" />,
              ...Object.keys(TagsList).map((item) => (
                <Picker.Item label={TagsList[item]} value={item} key={item} />
              )),
            ]}
          </Picker>
        </View>
      </View>
    </View>
  );
}
