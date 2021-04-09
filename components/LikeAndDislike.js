// Import
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import AuthContext from './AuthContext';
import Source from '../assets/source';

// Export
export default function LikeAndDislike({ post }) {
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [state, setState] = React.useState(0);
  const [likeType, setLikeType] = React.useState('');
  const [numOfLike, setNumOfLike] = React.useState(0);
  const [numOfDislike, setNumOfDislike] = React.useState(0);

  const postId = React.useRef(post._id);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
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
              if (res.like.includes(username)) {
                setState(true);
              } else setState(false);
              setNumOfLike(res.like.length);
              fetched.current = true;
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  async function submitData() {
    await getUser(setUsername);
    await fetch(`https://${Source.heroku}/likeAndDislike`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: postId.current,
        state,
        likeType,
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
          if (likeType === 'like') setNumOfLike(res.like.length);
          else if (likeType === 'dislike') setNumOfDislike(res.dislike.length);
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchLikeAndDislike, [getUser, state, username]);

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          if (state === 0 || state === -1) {
            setState(1);
          } else setState(0);
          setLikeType('like');
          submitData();
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{ color: state === 1 ? '#83CCFF' : 'lightgrey', margin: 5 }}
        />
        <Text style={{ alignSelf: 'center', marginRight: 15 }}>
          {numOfLike}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          if (state === 0 || state === 1) {
            setState(-1);
          } else setState(0);
          setLikeType('dislike');
          submitData();
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsDown}
          style={{ color: state === -1 ? '#FB7676' : 'lightgrey', margin: 5 }}
        />
        <Text style={{ alignSelf: 'center', marginRight: 15 }}>
          {numOfDislike}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
