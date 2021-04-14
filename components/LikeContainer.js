// Import
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import AppContext from './AppContext';

// Export like container
export default function LikeContainer({ post }) {
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [likeState, setLikeState] = React.useState(false);
  const [numOfLike, setNumOfLike] = React.useState(0);

  const postId = React.useRef(post._id);
  const fetched = React.useRef(false);
  const status = React.useRef(0);

  // Fetch like
  function fetchLike() {
    (async () => {
      if (!fetched.current) {
        await getUser(setUsername);
        await fetch('https://cu-there-server.herokuapp.com/fetchLike', {
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
                setLikeState(true);
              }
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

  async function Like() {
    await getUser(setUsername);
    await fetch('https://cu-there-server.herokuapp.com/like', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: postId.current,
        likeState,
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
          setNumOfLike(res.like.length);
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchLike, [getUser, likeState, username]);

  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: 'row' }}
        onPress={() => {
          setLikeState(!likeState);
          Like();
        }}
      >
        <FontAwesomeIcon
          icon={faThumbsUp}
          style={{
            color: likeState ? '#83CCFF' : 'lightgrey',
            margin: '2%',
            marginLeft: '3%',
          }}
        />
        <Text style={{ alignSelf: 'center', marginRight: 15 }}>
          {numOfLike}
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
