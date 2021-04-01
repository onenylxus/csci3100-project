// Import
import React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export feed screen
export default function FeedScreen() {
  const [comment, setComment] = React.useState('');

  return (
    <View style={Style.commentBox}>
      <Text style={{ alignSelf: 'center' }}>Comments</Text>
      <Text style={{ alignSelf: 'center' }}>Comment 1</Text>
      <Text style={{ alignSelf: 'center' }}>Comment 2</Text>
      <View style={Style.commentBar}>
        <FontAwesomeIcon
          icon={faPen}
          size={15}
          style={{ marginHorizontal: 5, marginVertical: 12 }}
        />
        <TextInput
          placeholder="Write Comment"
          style={{ outline: 'none', width: 230 }}
          value={comment}
          onChangeText={(value) => setComment(value)}
        />
        <TouchableOpacity style={Style.sendMessageButtom}>
          <Text style={{ color: 'blue' }}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
