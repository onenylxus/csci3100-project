// Import
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  SectionList,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Grid, Col } from 'react-native-easy-grid';
import { useNavigation } from '@react-navigation/native';
import MessageBar from '../components/MessageBar';

// Export chatbox screen
export default function ChatboxPhoneScreen() {
  const navigation = useNavigation();

  const DATA = [
    {
      title: 'Today',
      data: ['Message No. 0', 'Message No. 1'],
    },
    {
      title: 'Yesterday',
      data: ['Message No. 0', 'Message No. 1'],
    },
    {
      title: '1st April, 2021',
      data: ['Message No. 0', 'Message No. 1'],
    },
    {
      title: '31th March, 2021',
      data: ['Nice to meet you!', 'Nice to meet you!'],
    },
  ];

  const Item = ({ title }) => (
    <View>
      <View
        style={{
          alignSelf: 'flex-start',
          padding: 10,
          backgroundColor: '#D2D2D2',
          margin: 5,
          borderRadius: 15,
        }}
      >
        <Text>{title}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flexDirection: 'column', marginHorizontal: 10 }}>
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
                width: 48,
                height: 48,
                margin: 10,
                borderRadius: 28,
              }}
              source={require('../assets/images/defaultprofile.png')}
            />
            <Text style={{ alignSelf: 'center', fontSize: 22 }}>Username</Text>
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
      <ScrollView style={{ height: '80%' }} invertStickyHeaders>
        <SectionList
          inverted
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item} />}
          renderSectionFooter={({ section: { title } }) => (
            <View
              style={{
                alignSelf: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                backgroundColor: '#D2D2D2',
                borderRadius: 15,
                marginVertical: 5,
              }}
            >
              <Text style={{ color: '#000', padding: 5 }}>{title}</Text>
            </View>
          )}
        />
      </ScrollView>
      <View>
        <MessageBar />
      </View>
    </View>
  );
}
