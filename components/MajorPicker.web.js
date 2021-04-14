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
