// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import SearchBar from '../../components/SearchBar';
import PostContainer from '../../components/PostContainer';

// Export Channels screen
export default function ChannelsScreen() {
  const route = useRoute();
  const { tags } = route.params;

  return (
    <View style={{ marginBottom: 50 }}>
      <SearchBar />
      <ScrollView>
        <PostContainer tags={tags} />
      </ScrollView>
    </View>
  );
}
