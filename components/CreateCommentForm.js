// Import
import React from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import AuthContext from './AuthContext';
import Style from '../assets/style';
import Source from '../assets/source';

// Export Comment Box
export default function CreateCommentForm({ post }) {
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [comment, setComment] = React.useState('');

  const status = React.useRef(0);
  const postId = React.useRef(post._id);

  async function submitData() {
    await getUser(setUsername);
    await fetch(`https://${Source.heroku}/createComment`, {
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
        style={{ outline: 'none', width: 230 }}
        value={comment}
        onChangeText={(value) => setComment(value)}
      />
      <TouchableOpacity style={Style.sendMessageButtom} onPress={submitData}>
        <Text style={{ color: 'blue' }}>Send</Text>
      </TouchableOpacity>
    </View>
  );
}