// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import PostBox from '../components/PostBox';

// Export feed screen
export default function FeedScreen() {
  return (
    <View style={{ marginBottom: 50 }}>
      <View>
        <SearchBar />
      </View>
      <ScrollView>
        <View>
          <PostBox />
        </View>
      </ScrollView>
    </View>
  );
}
