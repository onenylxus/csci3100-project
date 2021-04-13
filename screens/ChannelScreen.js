// Import
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
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

// Stack

// Export Channels screen
export default function ChannelsScreen() {
  const navigation = useNavigation();

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

  // const channelCategories = []; { tags: { title } }

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

  return <View>{Item}</View>;
}
