// Import
import React from 'react';
import { FlatList, TouchableOpacity, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Export Channels screen
export default function ChannelsScreen() {
  const navigation = useNavigation();

  const categories = [
    { title: 'Academics' },
    { title: 'Relationships' },
    { title: 'CU-Related' },
    { title: 'News' },
    { title: 'Entertainment' },
  ];

  const Item = ({ title }) => (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChannelFeed', { tags: { title } })}
      >
        <Text style={{ fontSize: 32, padding: 20 }}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <View>
      <FlatList data={categories} renderItem={renderItem} />
    </View>
  );
}
