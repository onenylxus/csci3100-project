// Import
import React from 'react';
import {
  Text,
  Button,
  // Dimensions,
  View,
  RefreshControl,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../components/AuthContext';
import PostBox from '../components/PostBox';
import Style from '../assets/style';

// Export profile screen
export default function ProfileScreen() {
  // const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [numOfFollower, setNumOfFollower] = React.useState(0);
  const [numOfFollowing, setNumOfFollowing] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);

  const page = React.useRef(0);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
  const showButton = React.useRef(true);

  // Get username
  getUser(setUsername);

  /* function styleByDevice(widthOfDevice, component) {
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
  } */

  function fetchFollow() {
    (async () => {
      if (!fetched.current) {
        await fetch('https://cu-there-server.herokuapp.com/fetchFollow', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            other: username,
          }),
        })
          .then((res) => {
            status.current = res.status;
            return res;
          })
          .then((res) => res.json())
          .then((res) => {
            if (status.current === 200) {
              setNumOfFollower(res.follower.length);
              setNumOfFollowing(res.following.length);
              fetched.current = true;
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  function fetchPost() {
    (async () => {
      if (refreshing) {
        await fetch('https://cu-there-server.herokuapp.com/fetchPost', {
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

  React.useEffect(fetchFollow, [username]);

  React.useEffect(fetchPost, [refreshing, username]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1 }}>
        <Grid style={Style.profileContainerPhone}>
          <View style={Style.infoLayerPhone}>
            <Row size={1} style={Style.profilePicturePhone}>
              <Image
                style={{
                  width: 64,
                  height: 64,
                  margin: 8,
                  borderRadius: 32,
                }}
                source={require('../assets/images/profile.png')}
              />
              <Text style={Style.userInfoPhone}>
                Username: {username} {'\n'}
                Major:{'\n'}
                College:{'\n'}
              </Text>
            </Row>
            <Row size={2} style={Style.editProfileButtonPhone}>
              <Button
                title="Edit Profile"
                onPress={() => navigation.navigate('EditProfile')}
              />
              <TouchableOpacity style={{ marginHorizontal: 15 }}>
                <Text>{numOfFollower} Followers</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 15 }}>
                <Text>{numOfFollowing} Following</Text>
              </TouchableOpacity>
            </Row>
          </View>
          <Row />
        </Grid>
      </View>
      <View>{generate()}</View>
    </ScrollView>
  );
}
