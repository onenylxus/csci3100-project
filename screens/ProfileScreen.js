// Import
import React from 'react';
import {
  Text,
  Button,
  Dimensions,
  View,
  RefreshControl,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../components/AuthContext';
import PostBox from '../components/PostBox';
import Style from '../assets/style';
import Source from '../assets/source';

// Export profile screen
export default function ProfileScreen() {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);

  const page = React.useRef(0);
  const status = React.useRef(0);
  const showButton = React.useRef(true);

  // Get username
  getUser(setUsername);

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

  function fetchPost() {
    (async () => {
      if (refreshing) {
        await fetch(`https://${Source.heroku}/fetchPost`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            page,
            tags: '',
          }),
        })
          .then((res) => {
            status.current = res.status;
            return res;
          })
          .then((res) => res.json())
          .then((res) => {
            if (status.current === 200) {
              setList(res.posts);
              setRefreshing(false);
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  function generate() {
    return list.map((post) => (
      <PostBox key={post._id} post={post} showButton={showButton.current} />
    ));
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing, username]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1 }}>
        <Grid style={styleByDevice(windowWidth, 'container')}>
          <View style={styleByDevice(windowWidth, 'infoLayer')}>
            <Row size={1}>
              <Col size={styleByDevice(windowWidth, 'propicLayer')}>
                <Row size={1} style={styleByDevice(windowWidth, 'propic')}>
                  <Image
                    style={{
                      width: 64,
                      height: 64,
                      margin: 8,
                      borderRadius: 32,
                    }}
                    source={require('../assets/images/profile.png')}
                  />
                </Row>
                <Row size={0.5} style={styleByDevice(windowWidth, 'button')}>
                  <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate('EditProfile')}
                  />
                  <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text>4 Followers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ marginHorizontal: 15 }}>
                    <Text>4 Following</Text>
                  </TouchableOpacity>
                </Row>
              </Col>
              <Text style={styleByDevice(windowWidth, 'userInfo')}>
                Username: {username} {'\n'}
                Major:{'\n'}
                College:{'\n'}
              </Text>
            </Row>
          </View>
          <Row />
        </Grid>
      </View>
      <View>{generate()}</View>
    </ScrollView>
  );
}
