// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import Style from '../assets/style';

// Export Comment
export default function Comment({ comment }) {
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
    <View style={Style.Comment}>
      <View style={{ flexDirection: 'row' }}>
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 5 }}>
            <Image
              style={Style.userIcon}
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
