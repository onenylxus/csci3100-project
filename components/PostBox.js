// Import
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
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
export default function PostBox() {
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  return (
    <View style={Style.profilePost}>
      <View>
        <TouchableOpacity style={{ alignSelf: 'flex-end', margin: 5 }}>
          <FontAwesomeIcon icon={faEllipsisH} />
        </TouchableOpacity>
      </View>
      <Text>Post 1</Text>
      <View style={Style.postBar}>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setLike(!like);
            setDislike(false);
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              color: like ? 'blue' : 'black',
            }}
          >
            Like
          </Text>
          <FontAwesomeIcon
            icon={faThumbsUp}
            style={{ color: '#83CCFF', margin: 5, marginRight: 15 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => {
            setDislike(!dislike);
            setLike(false);
          }}
        >
          <Text
            style={{
              alignSelf: 'center',
              color: dislike ? 'blue' : 'black',
            }}
          >
            Dislike
          </Text>
          <FontAwesomeIcon
            icon={faThumbsDown}
            style={{ color: '#FB7676', margin: 5, marginRight: 15 }}
          />
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
