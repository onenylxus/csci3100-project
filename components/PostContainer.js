/**
 * CU There Team
 * @component PostConatiner - Displays each posts according to where they are located
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Located in FeedScreen, ChannelFeedScreen, GuestFeedScreen,
 *            ProfileScreen and OtherProfileScreen
 * PURPOSE: Displays post content, and if it is in feed or channel feed screen, hide edit and delete function, display report. Otherwise display edit and delete function, hide report.
 *          Also includes interactions like navigate to other profiles and includes like and comment container.
 */

// Import
import React from 'react';
import { Alert, Text, View, TouchableOpacity, Image } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faCommentAlt,
  faEdit,
  faExclamation,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import AppContext from './AppContext';
import CommentContainer from './CommentContainer';
import LikeContainer from './LikeContainer';
import Style from '../assets/style';

// Export post container
export default function PostContainer({ post, image, showButton }) {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [showComment, setShowComment] = React.useState(false);

  const status = React.useRef(0);
  const date = React.useRef(new Date(post.timestamp));
  const monthString = React.useRef(date.current.getMonth() + 1);
  const dateString = React.useRef(
    `${date.current
      .getHours()
      .toString()
      .padStart(2, '0')}:${date.current
      .getMinutes()
      .toString()
      .padStart(2, '0')}  ${date.current
      .getDate()
      .toString()
      .padStart(2, '0')}/${monthString.current
      .toString()
      .padStart(2, '0')}/${date.current.getFullYear().toString()}`
  );

  getUser(setUsername);

  async function deletePost() {
    await fetch('https://cu-there-server.herokuapp.com/deletePost', {
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

  function askReport() {
    return Alert.alert(
      'Report this post?',
      'Are you sure you would like to report this post?',
      [
        {
          text: 'No',
          onPress: () => undefined,
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => navigation.navigate('CreateReport', { post }),
          style: 'destructive',
        },
      ]
    );
  }

  function nav(user) {
    if (
      username.current !== user &&
      user !== 'Anonymous' &&
      user !== 'deleted account'
    ) {
      navigation.navigate('OtherProfile', { user });
    } else {
      navigation.navigate('Profile');
    }
  }

  return (
    <View style={Style.profilePost}>
      <View>
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 15 }}>
            <TouchableOpacity onPress={() => nav(post.username)}>
              <Image
                style={Style.userIcon}
                source={
                  image &&
                  post.username !== 'Anonymous' &&
                  post.username !== 'deleted account'
                    ? { uri: `data:image/jpeg;base64,${image}` }
                    : require('../assets/images/profile.png')
                }
              />
            </TouchableOpacity>
            <View style={{ flexDirection: 'column' }}>
              <TouchableOpacity onPress={() => nav(post.username)}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                  {post.username}
                </Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 12, marginRight: 5 }}>
                  {dateString.current}
                </Text>
                {post.tags !== '' ? (
                  <Text style={{ fontSize: 12, alignSelf: 'center' }}>
                    @{post.tags}
                  </Text>
                ) : null}
              </View>
            </View>
          </Col>
          <Col>
            {showButton ? (
              <View style={Style.trashIcon}>
                <TouchableOpacity style={{ margin: 8 }} onPress={askDelete}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ margin: 8 }}
                  onPress={() => navigation.navigate('EditPost', { post })}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </TouchableOpacity>
              </View>
            ) : (
              <View style={Style.trashIcon}>
                <TouchableOpacity style={{ margin: 8 }} onPress={askReport}>
                  <FontAwesomeIcon icon={faExclamation} />
                </TouchableOpacity>
              </View>
            )}
          </Col>
        </Grid>
      </View>
      <Text style={Style.postTitle}>{post.title}</Text>
      <Text style={{ marginHorizontal: 15, fontSize: 16 }}>{post.content}</Text>
      <View
        style={{
          marginHorizontal: 15,
          marginVertical: 10,
          flexDirection: 'row',
        }}
      >
        <LikeContainer key={post._id} post={post} />
      </View>
      <View style={{ marginBottom: 10 }}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setShowComment(!showComment)}
        >
          <Text
            style={{
              alignSelf: 'center',
              margin: 5,
              marginLeft: '3%',
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
