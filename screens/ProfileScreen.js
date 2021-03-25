// Import
import React from 'react';
import { Text, Button, Dimensions } from 'react-native';
import { Row, Col, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export profile screen

export default function ProfileScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 800) {
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

      default:
        break;
    }
  }

  return (
    <Grid style={styleByDevice(windowWidth, 'container')}>
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
      <Row size={3} style={Style.profilePost}>
        <Text>Current Posts</Text>
      </Row>
    </Grid>
  );
}
