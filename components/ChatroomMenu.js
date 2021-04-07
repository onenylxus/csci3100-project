// Import
import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style';

// export individual chatBox in chatroom Menu
export default function Chat() {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  function chatNavigation(screenWidth) {
    if (screenWidth < 1100) {
      return () => navigation.navigate('ChatboxPhone');
    }
    return null;
  }

  return (
    <View style={Style.chatRoomContainerPhone}>
      <TouchableOpacity
        style={Style.chatBox}
        onPress={chatNavigation(windowWidth)} // if using small screen, navigate to Chat
      >
        <Grid>
          <Col style={{ alignSelf: 'center' }} size={1}>
            <Image
              style={Style.chatMenuIcon}
              source={require('../assets/images/defaultProfile.png')}
            />
          </Col>
          <Col style={{ alignSelf: 'center' }} size={2}>
            <View style={Style.chatMenuInfo}>
              <Text style={{ fontSize: 18, marginBottom: 2 }}>Username</Text>
              <Text style={{ fontSize: 13 }}>Recent message</Text>
            </View>
          </Col>
          <Col style={{ alignSelf: 'center' }}>
            <View>
              <Text style={{ alignSelf: 'flex-end', marginRight: 15 }}>
                12:30
              </Text>
            </View>
          </Col>
        </Grid>
      </TouchableOpacity>
    </View>
  );
}
