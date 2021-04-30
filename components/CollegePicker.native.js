/**
 * CU There Team
 * @component CollegePicker - User can update college of its client database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in AddInfoForm and EditProfileScreen
 * PURPOSE: This module provides a picker for users to pick a college
 * This is the native version of the module
 */

// Import
import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import CollegeList from '../assets/json/collegeList.json';
import Style from '../assets/style';

// Export college picker
export default function CollegePicker({ callback, value }) {
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style for Small Screen
      switch (component) {
        case 'width':
          return '100%';

        case 'pickerWidth':
          return '100%';

        default:
          break;
      }
    }

    // Style for Large Screen
    switch (component) {
      case 'width':
        return 550;

      case 'pickerWidth':
        return '75%';

      default:
        break;
    }
  }

  // Render College Picker
  return (
    <View>
      {/* College */}
      <View
        style={{
          flexDirection: 'column',
          width: styleByDevice(windowWidth, 'width'),
        }}
      >
        <Text style={Style.pickerTitle}>College: </Text>
        <View style={{ marginBottom: 10 }}>
          <Picker
            style={{
              width: styleByDevice(windowWidth, 'pickerWidth'),
              alignSelf: 'center',
            }}
            selectedValue={value}
            onValueChange={(itemValue) => callback(itemValue)}
          >
            {[
              <Picker.Item label="Choose a college" value="" key="" />,
              ...Object.keys(CollegeList).map((item) => (
                <Picker.Item
                  label={CollegeList[item]}
                  value={item}
                  key={item}
                />
              )),
            ]}
          </Picker>
        </View>
      </View>
    </View>
  );
}
