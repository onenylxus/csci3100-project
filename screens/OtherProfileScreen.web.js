// Import
import React from 'react';
import {
  Alert,
  Text,
  Button,
  View,
  RefreshControl,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { useRoute } from '@react-navigation/native';
import AppContext from '../components/AppContext';
import CollegeList from '../assets/json/collegeList.json';
import MajorList from '../assets/json/majorList.json';
import PostContainer from '../components/PostContainer';
import Style from '../assets/style';

// Export other profile screen
export default function OtherProfileScreen() {
  const route = useRoute();

  const { author } = route.params;
  const { getUser } = React.useContext(AppContext);

  const [username, setUsername] = React.useState('');
  const [followState, setFollowState] = React.useState(false);
  const [numOfFollower, setNumOfFollower] = React.useState(0);
  const [numOfFollowing, setNumOfFollowing] = React.useState(0);
  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [college, setCollege] = React.useState('');
  // const [gender, setGender] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [bio, setBio] = React.useState('');

  const page = React.useRef(0);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
  const showButton = React.useRef(false);

  // Get username
  getUser(setUsername);

  function fetchData() {
    (async () => {
      if (refreshing) {
        if (!fetched.current) {
          await fetch('https://cu-there-server.herokuapp.com/fetchData', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: author,
            }),
          })
            .then((res) => {
              status.current = res.status;
              return res;
            })
            .then((res) => res.json())
            .then((res) => {
              if (status.current === 200) {
                // setGender(res.gender);
                setMajor(res.major);
                setCollege(res.college);
                setBio(res.bio);
              } else if (status.current === 422) {
                console.log(res.error);
              }
            })
            .catch((err) => console.log(err));
        }
      }
    })();
  }

  function fetchFollow() {
    (async () => {
      if (refreshing) {
        if (!fetched.current) {
          await fetch('https://cu-there-server.herokuapp.com/fetchFollow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              other: author,
            }),
          })
            .then((res) => {
              status.current = res.status;
              return res;
            })
            .then((res) => res.json())
            .then((res) => {
              if (status.current === 200) {
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
        other: author,
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
        if (status.current === 422) {
          return Alert.alert(
            'Client not found',
            'User does not exist. The user should have deleted his or her account',
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

  function fetchPost() {
    (async () => {
      if (refreshing) {
        await fetch('https://cu-there-server.herokuapp.com/fetchPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: author,
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
      <PostContainer
        key={post._id}
        post={post}
        showButton={showButton.current}
      />
    ));
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchData, [refreshing, author]);

  React.useEffect(fetchFollow, [followState, author, refreshing, username]);

  React.useEffect(fetchPost, [followState, author, refreshing, username]);

  if (author === 'deleted account') {
    return (
      <View>
        <Text>This user is no longer avaliable</Text>
      </View>
    );
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={{ flex: 1 }}>
        <Grid style={Style.profileContainerPC}>
          <View>
            <Row size={10} style={Style.profilePicturePC}>
              <Image
                style={{
                  width: 128,
                  height: 128,
                  margin: 8,
                  borderRadius: 70,
                }}
                source={require('../assets/images/profile.png')}
              />
              <Text style={Style.userInfoPC}>
                <Text style={{ fontWeight: 'bold' }}>
                  {author} {'\n'}
                </Text>
                Major:{' '}
                {MajorList.hasOwnProperty(major) ? MajorList[major] : 'N/A'}
                {'\n'}
                College:{' '}
                {CollegeList.hasOwnProperty(college)
                  ? CollegeList[college]
                  : 'N/A'}
                {'\n'}
              </Text>
            </Row>
            <Row
              style={{
                justifyContent: 'center',
                flexDirection: 'column',
                alignContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={Style.bioContainerPC}>
                <Text
                  style={{
                    paddingBottom: '2%',
                    fontSize: 16,
                    borderBottomWidth: 1,
                  }}
                >
                  Biography:
                </Text>
              </View>
              <View
                style={{
                  maxWidth: '85%',
                  minWidth: '85%',
                  paddingHorizontal: '4%',
                }}
              >
                <Text style={{ padding: '2%' }}>{bio}</Text>
              </View>
            </Row>
            <Row size={2} style={Style.editProfileButtonPhone}>
              {followState ? (
                <Button
                  title="unfollow"
                  style={{
                    backgroundColor: followState ? '#69c6f0' : '#cccccc',
                    margin: 5,
                  }}
                  onPress={() => {
                    setFollowState(!followState);
                    follow();
                  }}
                />
              ) : (
                <Button
                  title="follow"
                  style={{
                    backgroundColor: followState ? '#69c6f0' : '#cccccc',
                    margin: 5,
                  }}
                  onPress={() => {
                    setFollowState(!followState);
                    follow();
                  }}
                />
              )}
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
