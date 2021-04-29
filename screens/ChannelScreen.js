/**
 * CU There Team
 * @Component ChannelScreen - A screen for showing all the channel available
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from ChannelStack
 * PURPOSE: This ChannelScreen displayed all the available categories
 * and direct user to ChannelFeenScreen
 */

// Import
import React from 'react';
import { TouchableOpacity, Text, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {
  faBook,
  faHeart,
  faSchool,
  faNewspaper,
  faGamepad,
  faRunning,
  faPuzzlePiece,
  faTshirt,
} from '@fortawesome/free-solid-svg-icons';
import Header from '../assets/headers/Header';

// Export ChannelsScreen
export default function ChannelsScreen() {
  const navigation = useNavigation();

  // Define channels
  const categories = [
    { title: 'Academics', icon: faBook },
    { title: 'CU-Related', icon: faSchool },
    { title: 'Entertainment', icon: faPuzzlePiece },
    { title: 'Fashion', icon: faTshirt },
    { title: 'Gaming', icon: faGamepad },
    { title: 'News', icon: faNewspaper },
    { title: 'Relationships', icon: faHeart },
    { title: 'Sports', icon: faRunning },
  ];

  // Display all the channel tags
  const Item = categories.map((data) => (
    <View style={{ paddingHorizontal: 10 }} key={data.title}>
      <TouchableOpacity
        onPress={() => {
          navigation.setOptions(() => Header(data));
          navigation.navigate('ChannelFeed', { tags: data });
        }}
      >
        <View style={{ flexDirection: 'row', alignContent: 'center' }}>
          <FontAwesomeIcon
            icon={data.icon}
            size={23}
            style={{ margin: 5, alignSelf: 'center' }}
          />
          <Text style={{ fontSize: 32, padding: 20 }}>{data.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  ));

  return (
    // Enable ScrollView
    <ScrollView>
      <View>{Item}</View>
    </ScrollView>
  );
}
