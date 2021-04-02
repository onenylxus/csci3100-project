// Import
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Grid, Col } from 'react-native-easy-grid';
import Style from '../assets/style';
import SearchBar from '../components/SearchBar';
import MessageBar from '../components/MessageBar';

// Export chatroom screen
export default function ChatroomScreen() {
  const windowWidth = Dimensions.get('window').width;

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
              <FontAwesomeIcon
                icon={faUser}
                size={15}
                style={{ marginHorizontal: 5, marginVertical: 12 }}
              />
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Style.chatBox}>
              <Text>hi</Text>
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
    <View style={Style.chatRoomContainerPhone}>
      <SearchBar />
      <ScrollView>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.chatBox}>
          <Text>hi</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
