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
import Source from '../assets/source';
import Style from '../assets/style';

// Export Post Box
export default function PostBox() {
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  function fetchData() {
    fetch(`https://${Source.heroku}/postBox`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchData);

  return (
    <View style={Style.profilePost}>
      <View>
        <Grid>
          <Col style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image
              style={{
                width: 64,
                height: 64,
                marginHorizontal: 8,
                borderRadius: 28,
              }}
              source={require('../assets/images/defaultprofile.png')}
            />
            <View style={{ flexDirection: 'column', marginTop: 15 }}>
              <Text>Username</Text>
              <Text>Date</Text>
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
      <Text style={{ margin: 15, fontSize: 22 }}>Post content</Text>
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
          <Text style={{ alignSelf: 'center', marginRight: 15 }}>4</Text>
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
          <Text style={{ alignSelf: 'center', marginRight: 15 }}>4</Text>
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
