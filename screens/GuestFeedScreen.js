// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
// import Style from '../assets/style';
import SearchBar from '../components/SearchBar';
import PostBox from '../components/PostBox';

// Export guest feed screen
export default function GuestFeedScreen() {
  return (
    <View style={{ marginBottom: 50 }}>
      <View>
        <SearchBar />
      </View>
      <ScrollView>
        <View>
          <PostBox />
        </View>
        <View>
          <PostBox />
        </View>
        <View>
          <PostBox />
        </View>
      </ScrollView>
    </View>
  );
}
