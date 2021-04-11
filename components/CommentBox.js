// Import
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Comment Box
export default function CommentBox({ comment }) {
  const date = React.useRef(new Date(comment.timestamp));
  const monthString = React.useRef(date.current.getMonth() + 1);
  const dateString = React.useRef(
    date.current.getHours().toString().padStart(2, '0') +
      ':' +
      date.current.getMinutes().toString().padStart(2, '0') +
      '  ' +
      date.current.getDate().toString().padStart(2, '0') +
      '/' +
      monthString.current.toString().padStart(2, '0') +
      '/' +
      date.current.getFullYear().toString()
  );

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
          source={require('../assets/images/profile.png')}
        />
        <View style={{ flexDirection: 'column', marginTop: 15 }}>
          <Text>{comment.username}</Text>
          <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 15 }}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </TouchableOpacity>
          <Text>{dateString.current}</Text>
          <Text>{comment.content}</Text>
        </View>
      </View>
    </View>
  );
}
