// Import
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import AppContext from './AppContext';
import Style from '../assets/style';

// Export Comment
export default function Comment({ comment }) {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [commentUsername, setCommentUsername] = React.useState(
    comment.username
  );

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

  getUser(setUsername);

  function nav(other) {
    if (username !== other) {
      navigation.navigate('OtherProfile', { other });
    } else navigation.navigate('Profile');
  }

  return (
    <View style={Style.Comment}>
      <View style={{ flexDirection: 'row' }}>
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 5 }}>
            <TouchableOpacity
              onPress={() => {
                setCommentUsername(comment.username);
                nav(commentUsername);
              }}
            >
              <Image
                style={Style.userIcon}
                source={require('../assets/images/profile.png')}
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity
                onPress={() => {
                  setCommentUsername(comment.username);
                  nav(commentUsername);
                }}
              >
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                  {comment.username}
                </Text>
              </TouchableOpacity>
              <Text style={{ fontSize: 10 }}>{dateString.current}</Text>
              <Text>{comment.content}</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
}
