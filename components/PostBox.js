// Import
import React from 'react';
import { Alert, Text, View, TouchableOpacity, Image } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisH, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import CommentContainer from './CommentContainer';
import LikeAndDislike from './LikeAndDislike';
import Source from '../assets/source';
import Style from '../assets/style';

// Export Post Box
export default function PostBox({ post }) {
  const [showComment, setShowComment] = React.useState(false);

  const status = React.useRef(0);
  const username = React.useRef(post.username);
  const date = React.useRef(new Date(post.timestamp));
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

  async function deletePost() {
    await fetch(`https://${Source.heroku}/deletePost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: post._id,
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
          return Alert.alert('Post deleted', 'Your post has been deleted', [
            {
              text: 'OK',
              onPress: () => undefined,
              style: 'cancel',
            },
          ]);
        }
        if (status.current === 422) {
          return Alert.alert(
            'Post not found',
            'The post you want to delete does not exist.',
            [
              {
                text: 'OK',
                onPress: () => undefined,
                style: 'cancel',
              },
            ]
          );
        }
      })
      .catch((err) => console.log(err));
  }

  function askDelete() {
    return Alert.alert(
      'Delete this post?',
      'Are you sure you would like to delete this post? This action is irreversible.',
      [
        {
          text: 'No',
          onPress: () => undefined,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => deletePost(),
          style: 'destructive',
        },
      ]
    );
  }

  return (
    <View style={Style.profilePost}>
      <View>
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image
              style={{
                width: 32,
                height: 32,
                marginHorizontal: 8,
                marginTop: 4,
                borderRadius: 28,
              }}
              source={require('../assets/images/profile.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {username.current}
              </Text>
              <Text style={{ fontSize: 12 }}>{dateString.current}</Text>
            </View>
          </Col>
          <Col>
            <View style={{ justifyContent: 'flex-end' }}>
              <TouchableOpacity
                style={{ alignSelf: 'flex-end', margin: 15 }}
                onPress={askDelete}
              >
                <FontAwesomeIcon icon={faEllipsisH} />
              </TouchableOpacity>
            </View>
          </Col>
        </Grid>
      </View>
      <Text
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        {post.title}
      </Text>
      <Text style={{ marginHorizontal: 15, fontSize: 16 }}>{post.content}</Text>
      <View>
        <LikeAndDislike key={post._id} post={post} />
      </View>
      <View>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setShowComment(!showComment)}
        >
          <Text
            style={{
              alignSelf: 'center',
              margin: 5,
            }}
          >
            Comment
          </Text>
          <FontAwesomeIcon
            icon={faCommentAlt}
            style={{ margin: 5, marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      {showComment ? (
        <CommentContainer post={post} state={showComment} />
      ) : null}
    </View>
  );
}
