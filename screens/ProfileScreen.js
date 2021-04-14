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
  Modal,
} from 'react-native';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AppContext from '../components/AppContext';
import CollegeList from '../assets/json/collegeList.json';
import MajorList from '../assets/json/majorList.json';
import PostContainer from '../components/PostContainer';
import Style from '../assets/style';

// Export profile screen
export default function ProfileScreen() {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const {
    askPerm,
    getUser,
    getPlatform,
    getCameraPerm,
    getImagePerm,
  } = React.useContext(AppContext);

  const [refreshing, setRefreshing] = React.useState(true);
  const [showModal, setShowModal] = React.useState(false);
  const [platform, setPlatform] = React.useState('');
  const [cameraPerm, setCameraPerm] = React.useState(false);
  const [imagePerm, setImagePerm] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [numOfFollower, setNumOfFollower] = React.useState(0);
  const [numOfFollowing, setNumOfFollowing] = React.useState(0);
  const [college, setCollege] = React.useState('');
  const [image, setImage] = React.useState('');
  const [major, setMajor] = React.useState('');
  const [bio, setBio] = React.useState('');

  const [list, setList] = React.useState([]);

  const page = React.useRef(0);
  const fetched = React.useRef(false);
  const status = React.useRef(0);
  const showButton = React.useRef(true);

  // Get from context
  getUser(setUsername);
  getPlatform(setPlatform);
  getCameraPerm(setCameraPerm);
  getImagePerm(setImagePerm);

  function editProfile() {
    (async () => {
      if (refreshing) {
        if (!fetched.current) {
          console.log(image.substr(0, 10));
          await fetch('https://cu-there-server.herokuapp.com/editProfile', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username,
              image,
            }),
          })
            .then((res) => {
              status.current = res.status;
              return res;
            })
            .then((res) => res.json())
            .then((res) => {
              if (status.current === 200) {
                console.log(res);
              } else if (status.current === 422) {
                console.log(res.error);
              }
            })
            .catch((err) => console.log(err));
        }
      }
    })();
  }

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
              username,
            }),
          })
            .then((res) => {
              status.current = res.status;
              return res;
            })
            .then((res) => res.json())
            .then((res) => {
              if (status.current === 200) {
                setMajor(res.major);
                setCollege(res.college);
                setBio(res.bio);
                setImage(res.image);
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

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  async function changePic(type) {
    if (type === 'gallery') {
      if (!imagePerm && platform !== 'web') {
        await askPerm(type);
        await getImagePerm(setImagePerm);
      }
      if (imagePerm) {
        const res = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowEditing: true,
          aspect: [1, 1],
          quality: 1,
          base64: true,
        });
        if (!res.cancelled) {
          console.log(res.base64.substr(0, 20));
          fetched.current = false;
          setImage(res.base64);
        }
      }
      setShowModal(false);
      await onRefresh();
    } else {
      if (!cameraPerm && platform !== 'web') {
        await askPerm(type);
        await getCameraPerm(setCameraPerm);
      }
      if (cameraPerm) {
        const res = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowEditing: true,
          aspect: [1, 1],
          quality: 1,
          base64: true,
        });
        if (!res.cancelled) {
          console.log(res.base64.substr(0, 20));
          fetched.current = false;
          setImage(res.base64);
        }
      }
      setShowModal(false);
      await onRefresh();
    }
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

  React.useEffect(editProfile, [refreshing, username, image]);
  React.useEffect(fetchData, [refreshing, username]);
  React.useEffect(fetchFollow, [refreshing, username]);
  React.useEffect(fetchPost, [refreshing, username]);

  // Small screen
  if (windowWidth < 800) {
    return (
      <View>
        <Modal visible={showModal}>
          <Button
            title="Choose from gallery"
            onPress={() => changePic('gallery')}
          />
          <Button
            title="Choose from camera"
            onPress={() => changePic('camera')}
          />
          <Button title="Cancel" onPress={() => setShowModal(false)} />
        </Modal>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ flex: 1 }}>
            <Grid style={Style.profileContainerPhone}>
              <View style={Style.infoLayerPhone}>
                <Row size={1} style={Style.profilePicturePhone}>
                  <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Image
                      style={{
                        width: 64,
                        height: 64,
                        margin: 8,
                        borderRadius: 32,
                      }}
                      source={
                        image && image.length > 0
                          ? {
                              uri: `data:image/jpeg;base64,${image}`,
                            }
                          : require('../assets/images/profile.png')
                      }
                    />
                  </TouchableOpacity>
                  <Text style={Style.userInfoPhone}>
                    {username} {'\n'}
                    {MajorList.hasOwnProperty(major) ? MajorList[major] : 'N/A'}
                    {'\n'}
                    {CollegeList.hasOwnProperty(college)
                      ? CollegeList[college]
                      : 'N/A'}
                    {'\n'}
                  </Text>
                </Row>
                <Row>
                  <View>
                    <Text
                      style={{
                        paddingHorizontal: '10%',
                        marginBottom: '2%',
                        fontSize: 16,
                      }}
                    >
                      Biography:
                    </Text>
                  </View>
                </Row>
                <Row style={{ justifyContent: 'center' }}>
                  <View style={Style.bioContainerPhone}>
                    <Text>{bio}</Text>
                  </View>
                </Row>
                <Row size={2} style={Style.editProfileButtonPhone}>
                  <Button
                    title="Edit Profile"
                    onPress={() => navigation.navigate('EditProfile')}
                  />
                  <TouchableOpacity
                    style={{ marginHorizontal: 15 }}
                    onPress={() =>
                      navigation.navigate('Follower', { username })
                    }
                  >
                    <Text>{numOfFollower} Followers</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ marginHorizontal: 15 }}
                    onPress={() =>
                      navigation.navigate('Following', { username })
                    }
                  >
                    <Text>{numOfFollowing} Following</Text>
                  </TouchableOpacity>
                </Row>
              </View>
            </Grid>
          </View>
          <View>{generate()}</View>
        </ScrollView>
      </View>
    );
  }

  // Large screen
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
              <TouchableOpacity>
                <Image
                  style={{
                    width: 128,
                    height: 128,
                    margin: 8,
                    borderRadius: 70,
                  }}
                  source={require('../assets/images/profile.png')}
                />
              </TouchableOpacity>
              <Text style={Style.userInfoPC}>
                {username} {'\n'}
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
            <Row size={2} style={Style.editProfileButtonPC}>
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
        </Grid>
      </View>
      <View>{generate()}</View>
    </ScrollView>
  );
}
