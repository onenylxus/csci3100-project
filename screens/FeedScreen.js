// Import
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Style from '../assets/style';

// Export home screen
export default function HomeScreen() {
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
