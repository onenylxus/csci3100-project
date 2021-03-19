// Import
import React from 'react';
import { Text, ScrollView, View } from 'react-native';
import Style from '../assets/style';

// Export feed screen
export default function FeedScreen() {
  return (
    <View style={Style.container}>
      <ScrollView>
        <Text>Homepage</Text>
        <Text style={{ fontSize: 96 }}>Testing</Text>
        <Text style={{ fontSize: 96 }}>Scroll</Text>
        <Text style={{ fontSize: 96 }}>Testing</Text>
        <Text style={{ fontSize: 96 }}>Testing</Text>
        <Text style={{ fontSize: 96 }}>Testing</Text>
        <Text style={{ fontSize: 96 }}>Post 1</Text>
        <Text style={{ fontSize: 96 }}>Post 2</Text>
      </ScrollView>
    </View>
  );
}
