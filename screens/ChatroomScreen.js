// Import
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import Style from '../assets/style';
import SearchBar from '../components/SearchBar';

// Export chatroom screen
export default function ChatroomScreen() {
  return (
    <Grid style={Style.profileContainerPC}>
      <Col size={1} style={Style.chatRoomLeft}>
        <View style={{ alignItems: 'center' }}>
          <SearchBar />
        </View>
        <ScrollView>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
          <TouchableOpacity style={Style.chatBox}>hi</TouchableOpacity>
        </ScrollView>
      </Col>
      <Col size={2} style={Style.chatRoomRight}>
        <ScrollView>
          <Text style={{ fontSize: 40 }}>Your Messages</Text>
          <Text style={{ fontSize: 40 }}>Message 1</Text>
          <Text style={{ fontSize: 40 }}>Message 2</Text>
          <Text style={{ fontSize: 40 }}>Message 3</Text>
          <Text style={{ fontSize: 40 }}>Message 4</Text>
          <Text style={{ fontSize: 40 }}>Message 5</Text>
          <Text style={{ fontSize: 40 }}>Message 6</Text>
          <Text style={{ fontSize: 40 }}>Message 7</Text>
          <Text style={{ fontSize: 40 }}>Message 8</Text>
          <Text style={{ fontSize: 40 }}>Message 9</Text>
          <Text style={{ fontSize: 40 }}>Message 10</Text>
          <Text style={{ fontSize: 40 }}>Message 11</Text>
          <Text style={{ fontSize: 40 }}>Message 12</Text>
          <Text style={{ fontSize: 40 }}>Message 13</Text>
          <Text style={{ fontSize: 40 }}>Message 14</Text>
          <Text style={{ fontSize: 40 }}>Message 15</Text>
          <Text style={{ fontSize: 40 }}>Message 16</Text>
          <Text style={{ fontSize: 40 }}>Message 17</Text>
        </ScrollView>
      </Col>
    </Grid>
  );
}
