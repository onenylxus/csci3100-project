// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import PostContainer from '../components/PostContainer';

// Export feed screen
export default function FeedScreen() {
  return (
    <View style={{ marginBottom: 50 }}>
      <SearchBar />
      <ScrollView>
        <PostContainer tags="" />
      </ScrollView>
    </View>
  );
}
