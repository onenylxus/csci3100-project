/**
 * CU There Team
 * @component CreateCommentForm - Users can input comments and send to database here
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
 * This is the web version of the module.
 */

// Import
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AwesomeAlert from 'react-native-awesome-alerts';
import AppContext from './AppContext';
import Style from '../assets/style';

// Export Comment
export default function CreateCommentForm({ post }) {
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [comment, setComment] = React.useState('');

  const [showAlert, setShowAlert] = React.useState(false);

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
          console.log(res);
          setShowAlert(true);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={Style.commentBar}>
      <FontAwesomeIcon
        icon={faPen}
        size={15}
        style={{ marginHorizontal: 10, marginVertical: 12 }}
      />
      <TextInput
        placeholder="Write Comment"
        style={{ width: '85%', outline: 'none' }}
        value={comment}
        onChangeText={(value) => setComment(value)}
        testID="comment"
      />
      {comment !== '' ? (
        <TouchableOpacity style={Style.sendMessageButtom} onPress={submitData}>
          <Text style={{ color: 'blue', marginRight: 5 }} testID="send">
            Send
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={Style.sendMessageButtom}
          onPress={submitData}
          disabledw
        >
          <Text style={{ color: 'blue', marginRight: 5 }} testID="send">
            Send
          </Text>
        </TouchableOpacity>
      )}
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Comment is blank"
        message="Please enter something to comment."
        closeOnHardwareBackPress
        closeOnTouchOutside
        showConfirmButton
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        contentContainerStyle={100}
      />
    </View>
  );
}
