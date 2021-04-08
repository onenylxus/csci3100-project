// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import SearchBar from '../../components/SearchBar';
import PostContainer from '../../components/PostContainer';

// Export Academics screen
export default function AcademicsScreen() {
  return (
    <View style={{ marginBottom: 50 }}>
      <SearchBar />
      <ScrollView>
        <PostContainer />
      </ScrollView>
    </View>
  );
}
