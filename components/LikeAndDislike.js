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
  const [likeCount, setLikeCount] = React.useState(0);

  const postId = React.useRef(post._id);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
  const numOfLike = React.useRef(0);

  // Fetch Like(
  function fetchLikeAndDislike() {
    (async () => {
      if (!fetched.current) {
        await getUser(setUsername);
        await fetch(`https://${Source.heroku}/fetchLikeAndDislike`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
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
              numOfLike.current = res.peopleLike.length;
              fetched.current = true;
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  async function Like() {
    await getUser(setUsername);
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
          numOfLike.current = res.peopleLike.length;
          console.log(numOfLike.current);
        }
      })
      .catch((err) => console.log(err));
  }

  function displayLike() {
    setLikeCount(numOfLike.current);
  }

  React.useEffect(displayLike, [numOfLike]);
  React.useEffect(fetchLikeAndDislike);

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
          {likeCount}
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
