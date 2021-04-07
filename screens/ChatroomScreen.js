// Import
import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import Style from '../assets/style';
import SearchBar from '../components/SearchBar';
import MessageBar from '../components/MessageBar';
import ChatroomMenu from '../components/ChatroomMenu';

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
            <ChatroomMenu />
            <ChatroomMenu />
            <ChatroomMenu />
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <ChatroomMenu />
        <ChatroomMenu />
        <ChatroomMenu />
      </ScrollView>
    </View>
  );
}
