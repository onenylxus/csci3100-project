// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import PostContainer from '../components/PostContainer';

// Export guest feed screen
export default function GuestFeedScreen() {
  return (
    <View style={{ marginBottom: 50 }}>
      <SearchBar />
      <ScrollView>
        <PostContainer />
      </ScrollView>
    </View>
  );
}
