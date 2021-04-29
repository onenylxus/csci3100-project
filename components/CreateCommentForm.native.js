/**
 * CU There Team
 * @Component CreateCommentForm - Users can input comments and send to database here
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
 * PURPOSE: This module creates a comment in database
 * This is the native version of the module.
 */
// Import
import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AppContext from './AppContext';
import Style from '../assets/style';

// Export Comment
export default function CreateCommentForm({ post }) {
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [comment, setComment] = React.useState('');

  const status = React.useRef(0);
  const postId = React.useRef(post._id);

  // Get username
  getUser(setUsername);

  async function submitData() {
    await fetch(`https://cu-there-server.herokuapp.com/createComment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        content: comment,
        _id: postId.current,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          setComment('');
        } else if (status.current === 422) {
          switch (res.error) {
            // Empty content
            case 'missingContentError':
              return Alert.alert(
                'Comment is blank',
                'Please enter something to comment.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={Style.commentBar}>
      <FontAwesomeIcon
        icon={faPen}
        size={15}
        style={{ marginHorizontal: 5, marginVertical: 12 }}
      />
      <TextInput
        placeholder="Write Comment"
        style={{ width: '75%' }}
        value={comment}
        onChangeText={(value) => setComment(value)}
      />
      <TouchableOpacity style={Style.sendMessageButtom} onPress={submitData}>
        <Text style={{ color: 'blue' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}
