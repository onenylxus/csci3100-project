// Import
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AuthContext from './AuthContext';
import Source from '../assets/source';

// Export
export default function LikeAndDislike({ post }) {
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [like, setLike] = React.useState(false);

  const postId = React.useRef(post._id);

  const status = React.useRef(0);
  const likeCount = React.useRef(0);

  getUser(setUsername);

  // Fetch Like
  async function Like() {
    await fetch(`https://${Source.heroku}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: postId.current,
        username,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          likeCount.current = res.like.length();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          setLike(true);
          Like();
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ color: like ? '#83CCFF' : 'lightgrey', margin: 5 }}
        />
        <Text style={{ alignSelf: 'center', marginRight: 15 }}>
          {likeCount.current}
        </Text>
      </TouchableOpacity>
      {/*
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          setDislike(!dislike);
          setLike(false);
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{ color: dislike ? '#FB7676' : 'lightgrey', margin: 5 }}
        />
        <Text style={{ alignSelf: 'center', marginRight: 15 }}>
          {numOfDislike.current}
        </Text>
      </TouchableOpacity>
      */}
    </View>
  );
}
