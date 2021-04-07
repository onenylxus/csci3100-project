// Import
import React from 'react';
import { TextInput, TouchableOpacity, View, Text, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Comment Box
export default function CommentBox() {
  const [comment, setComment] = React.useState('');

  return (
    <View style={Style.commentBox}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            width: 48,
            height: 48,
            margin: 10,
            borderRadius: 28,
          }}
          source={require('../assets/images/defaultProfile.png')}
        />
        <View style={{ flexDirection: 'column', marginTop: 15 }}>
          <Text>Username</Text>
          <Text>Comment content</Text>
        </View>
      </View>
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
