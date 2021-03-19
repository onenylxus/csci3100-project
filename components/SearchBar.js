// Import
import React from 'react';
import { TextInput, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Search Bar
export default function SearchBar() {
  // const [searchWord, setsearchWord] = React.useState('');

  return (
    <View style={Style.SectionStyle}>
      <FontAwesomeIcon
        icon={faSearch}
        size={15}
        style={{ marginHorizontal: 5, marginVertical: 12 }}
      />
      <TextInput
        placeholder="Search"
        style={{ outline: 'none', width: '100%' }}
        // onChangeText={(text) => setsearchWord(text)}
      />
    </View>
  );
}
