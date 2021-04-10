// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import Style from '../assets/style';

// Export Comment Box
export default function CommentBox({ comment }) {
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
          <Text>{comment.content}</Text>
        </View>
      </View>
    </View>
  );
}
