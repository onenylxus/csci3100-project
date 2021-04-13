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
} from '@fortawesome/free-solid-svg-icons';

// Export Channels screen
export default function ChannelsScreen() {
  const navigation = useNavigation();

  const categories = [
    { title: 'Academics', icon: faBook },
    { title: 'Relationships', icon: faHeart },
    { title: 'CU-Related', icon: faSchool },
    { title: 'News', icon: faNewspaper },
    { title: 'Entertainment', icon: faGamepad },
  ];

  // const channelCategories = []; { tags: { title } }

  const Item = categories.map((data) => (
    <View style={{ paddingHorizontal: 10 }} key={data.index}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChannelFeed', { tags: data })}
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
