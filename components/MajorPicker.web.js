/**
 * CU There Team
 * @component MajorPicker - User can update major of its client database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in AddInfoForm and EditProfileForm
 * PURPOSE: This module provides a picker for users to pick a major
 * This is the web version of the module.
 */

// Import
import React from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-community/picker';
import MajorList from '../assets/json/majorList.json';
import Style from '../assets/style';

// Export major picker
export default function MajorPicker({ callback, value }) {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          width: 550,
        }}
      >
        <Text style={Style.pickerTitle}>Major:</Text>
        <View style={{ marginBottom: 10 }}>
          <Picker
            style={{
              width: '75%',
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
