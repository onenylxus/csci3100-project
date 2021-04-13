// Import
import React from 'react';
import {
  Text,
  Button,
  // Dimensions,n
  View,
  RefreshControl,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation, useRoute } from '@react-navigation/native';
import AuthContext from '../components/AuthContext';
import PostBox from '../components/PostBox';
import Style from '../assets/style';

// Export other profile screen
export default function OtherProfileScreen() {
  // const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const route = useRoute();

  const { postUsername } = route.params;
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [followState, setFollowState] = React.useState(false);
  const [numOfFollower, setNumOfFollower] = React.useState(0);
  const [numOfFollowing, setNumOfFollowing] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);

  const page = React.useRef(0);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
  const showButton = React.useRef(false);

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
            other: postUsername,
          }),
        })
          .then((res) => {
            status.current = res.status;
            return res;
          })
          .then((res) => res.json())
          .then((res) => {
            if (status.current === 200) {
              console.log('res.follower: ' + res.follower);
              if (res.follower.includes(username)) {
                setFollowState(true);
              }
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

  async function follow() {
    await fetch('https://cu-there-server.herokuapp.com/follow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        followState,
        self: username,
        other: postUsername,
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
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
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
            username: postUsername,
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
              console.log('followState: ' + followState);
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

  React.useEffect(fetchFollow, [postUsername, followState, username]);

  React.useEffect(fetchPost, [followState, postUsername, refreshing, username]);

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
                Username: {postUsername} {'\n'}
                Major:{'\n'}
                College:{'\n'}
              </Text>
            </Row>
            {followState ? (
              <Button title="unfollow" onPress={() => follow()} />
            ) : (
              <Button title="follow" onPress={() => follow()} />
            )}
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
