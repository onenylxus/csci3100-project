/**
 * CU There Team
 * @Component Comment - A comment from database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in CommentContainer
 * PURPOSE: This module fetches comment from database
 */
// Import
import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import AppContext from './AppContext';
import Style from '../assets/style';

// Export Comment
export default function Comment({ comment, image }) {
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

  function nav(user) {
    if (
      username !== user &&
      user !== 'Anonymous' &&
      user !== 'deleted account'
    ) {
      navigation.navigate('OtherProfile', { user });
    } else {
      navigation.navigate('Profile');
    }
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
                source={
                  image &&
                  username !== 'Anonymous' &&
                  username !== 'deleted account'
                    ? { uri: `data:image/jpeg;base64,${image}` }
                    : require('../assets/images/profile.png')
                }
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
