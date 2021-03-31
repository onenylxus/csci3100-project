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
import { faUserPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export profile screen

export default function ProfileScreen({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  // const [selectedOption, setSelectedOption] = React.useState();
  // let controller;

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
          </Row>
        </Grid>
      </View>
    </ScrollView>
  );
}
