// Import
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Search Bar
export default function SearchBar() {
  const [searchWord, setsearchWord] = React.useState('');

  return (
    <View style={Style.SearchBarStyle}>
      <FontAwesomeIcon
        icon={faSearch}
        size={15}
        style={{ marginHorizontal: 5, marginVertical: 12 }}
      />
      <TextInput
        placeholder="Search"
        style={{ width: '85%' }}
        value={searchWord}
        onChangeText={(value) => setsearchWord(value)}
        testID="input"
      />
      <TouchableOpacity onPress={() => setsearchWord('')} testID="search">
        <FontAwesomeIcon
          icon={faTimesCircle}
          size={15}
          style={{ marginHorizontal: 5, marginVertical: 12 }}
        />
      </TouchableOpacity>
    </View>
  );
}
