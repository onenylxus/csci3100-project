// Import
import React from 'react';
import {
  Text,
  Button,
  Dimensions,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faUserPlus,
  faEllipsisH,
  faThumbsUp,
  faThumbsDown,
  faCommentAlt,
} from '@fortawesome/free-solid-svg-icons';
import CommentBox from '../components/CommentBox';
import Style from '../assets/style';

// Export profile screen

export default function ProfileScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const [like, setLike] = React.useState(false);
  const [dislike, setDislike] = React.useState(false);
  const [showComment, setShowComment] = React.useState(false);

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style of Small Screen
      switch (component) {
        case 'container':
          return Style.profileContainerPhone;

        case 'button':
          return Style.editProfileButtonPhone;

        case 'propicSize':
          return 90;

        case 'propic':
          return Style.profilePicturePhone;

        case 'propicLayer':
          return 0.7;

        case 'userInfo':
          return Style.userInfoPhone;

        case 'infoLayer':
          return Style.infoLayerPhone;

        default:
          break;
      }
    }

    // Style of Large Screen
    switch (component) {
      case 'container':
        return Style.profileContainerPC;

      case 'button':
        return Style.editProfileButtonPC;

      case 'propicSize':
        return 120;

      case 'propic':
        return Style.profilePicturePC;

      case 'propicLayer':
        return 0.2;

      case 'userInfo':
        return Style.userInfoPC;

      case 'infoLayer':
        return Style.infoLayerPC;

      default:
        break;
    }
  }

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Grid style={styleByDevice(windowWidth, 'container')}>
          <View style={styleByDevice(windowWidth, 'infoLayer')}>
            <Row size={1}>
              <Col size={styleByDevice(windowWidth, 'propicLayer')}>
                <Row size={1} style={styleByDevice(windowWidth, 'propic')}>
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    size={styleByDevice(windowWidth, 'propicSize')}
                  />
                </Row>
                <Row size={0.5} style={styleByDevice(windowWidth, 'button')}>
                  <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate('EditProfile')}
                  />
                </Row>
              </Col>
              <Text style={styleByDevice(windowWidth, 'userInfo')}>
                Username{'\n'}
                Major: XXXXXX{'\n'}
                College: XXXXX{'\n'}
              </Text>
            </Row>
          </View>
          <Row style={Style.profilePost}>
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
          </Row>
          {showComment ? <CommentBox /> : null}
        </Grid>
      </View>
    </ScrollView>
  );
}
