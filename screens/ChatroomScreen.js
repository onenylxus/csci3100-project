// Import
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import Style from '../assets/style';
import SearchBar from '../components/SearchBar';
import MessageBar from '../components/MessageBar';

// Export chatroom screen
export default function ChatroomScreen() {
  const windowWidth = Dimensions.get('window').width;
  const navigation = useNavigation();

  if (windowWidth >= 1100) {
    // Large Screen
    return (
      <Grid style={Style.profileContainerPC}>
        <Col size={1} style={Style.chatRoomLeft}>
          <View style={{ alignItems: 'center' }}>
            <SearchBar />
          </View>
          <ScrollView>
            <TouchableOpacity style={Style.chatBox}>
              <Image
                style={{
                  width: 64,
                  height: 64,
                  margin: 8,
                  borderRadius: 28,
                  alignSelf: 'center',
                }}
                source={require('../assets/images/defaultProfile.png')}
              />
              <Text style={{ alignSelf: 'center' }}>hi</Text>
            </TouchableOpacity>
          </ScrollView>
        </Col>
        <Col size={2} style={Style.chatRoomRight}>
          <ScrollView>
            <Text style={{ fontSize: 40 }}>Your Messages</Text>
          </ScrollView>
          <MessageBar />
        </Col>
      </Grid>
    );
  }

  // Small Screen
  return (
    <View style={{ marginBottom: 50 }}>
      <View>
        <SearchBar />
      </View>
      <ScrollView>
        <View style={Style.chatRoomContainerPhone}>
          <TouchableOpacity
            style={Style.chatBox}
            onPress={() => navigation.navigate('ChatboxPhone')}
          >
            <Image
              style={{
                width: 64,
                height: 64,
                margin: 8,
                borderRadius: 28,
                alignSelf: 'center',
              }}
              source={require('../assets/images/defaultProfile.png')}
            />
            <Text style={{ alignSelf: 'center' }}>hi</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.chatRoomContainerPhone}>
          <TouchableOpacity
            style={Style.chatBox}
            onPress={() => navigation.navigate('ChatboxPhone')}
          >
            <Image
              style={{
                width: 64,
                height: 64,
                margin: 8,
                borderRadius: 28,
                alignSelf: 'center',
              }}
              source={require('../assets/images/defaultProfile.png')}
            />
            <Text style={{ alignSelf: 'center' }}>hi</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
