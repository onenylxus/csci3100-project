// Import
import React from 'react';
import {
  Text,
  Button,
  Dimensions,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../components/AuthContext';
import PostBox from '../components/PostBox';
import Style from '../assets/style';

// Export profile screen

export default function ProfileScreen() {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');

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

  return (
    <ScrollView>
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
                    source={require('../assets/images/defaultprofile.png')}
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
          <Row style={{ alignContent: 'center', justifyContent: 'center' }}>
            <PostBox />
          </Row>
          <Row style={{ alignContent: 'center', justifyContent: 'center' }}>
            <PostBox />
          </Row>
          <Row style={{ alignContent: 'center', justifyContent: 'center' }}>
            <PostBox />
          </Row>
        </Grid>
      </View>
    </ScrollView>
  );
}
