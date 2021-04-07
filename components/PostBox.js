// Import
import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
// import { List } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faEllipsisH,
  faThumbsUp,
  faThumbsDown,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import CommentBox from './CommentBox';
import Style from '../assets/style';

// Export Post Box
export default function PostBox({ post }) {
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  const username = React.useRef(post.username);
  const date = React.useRef(new Date(post.timestamp));
  const dateString = React.useRef(
    `${date.current.getHours()}:${date.current.getMinutes()}  ${date.current.getDate()}/${date.current.getMonth()}/${date.current.getFullYear()}`
  );
  const numOfLike = React.useRef(post.numOfLike);
  const numOfDislike = React.useRef(post.numOfDislike);

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
              <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 15 }}>
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
      <View style={Style.postBar}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setLike(!like);
            setDislike(false);
          }}
        >
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ color: like ? '#83CCFF' : 'lightgrey', margin: 5 }}
          />
          <Text style={{ alignSelf: 'center', marginRight: 15 }}>
            {numOfLike.current}
          </Text>
        </TouchableOpacity>
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
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => setShowComment(!showComment)}
        >
          <Text
            style={{
              alignSelf: 'center',
            }}
          >
            Comment
          </Text>
          <FontAwesomeIcon
            icon={faCommentAlt}
            style={{ margin: 5, marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
      {showComment ? <CommentBox /> : null}
    </View>
  );
}
