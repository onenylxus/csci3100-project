// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
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
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image
              style={{
                width: 32,
                height: 32,
                marginHorizontal: 8,
                marginTop: 4,
                borderRadius: 28,
              }}
              source={require('../assets/images/profile.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                {comment.username}
              </Text>
              <Text style={{ fontSize: 10 }}>{dateString.current}</Text>
              <Text>{comment.content}</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
}
