// Import
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Col } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import MessageBar from '../components/MessageBar';
import Chat from '../components/Chat';

// Export chatbox screen
export default function ChatboxPhoneScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
      {/* Header of user */}
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 1,
          borderBottomColor: '#ACACAC',
        }}
      >
        <Grid>
          <Col size={10} style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chatroom')}
              style={{ alignSelf: 'center', paddingRight: 15 }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size={25} />
            </TouchableOpacity>
            <Image
              style={{
                width: 40,
                height: 40,
                margin: 8,
                borderRadius: 28,
              }}
              source={require('../assets/images/defaultProfile.png')}
            />
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>Username</Text>
          </Col>
          <Col
            size={1}
            style={{ alignSelf: 'center', justifyContent: 'center' }}
          >
            <TouchableOpacity>
              <FontAwesomeIcon icon={faInfoCircle} size={25} />
            </TouchableOpacity>
          </Col>
        </Grid>
      </View>
      <ScrollView
        style={{ height: '82%' }}
        showsVerticalScrollIndicator={false}
        scrollToEnd
      >
        <Chat />
      </ScrollView>
      <View>
        <MessageBar />
      </View>
    </View>
  );
}
