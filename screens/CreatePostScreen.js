// Import
import React from 'react';
import { Text, View } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
  return (
    <View style={Style.container}>
      <Text style={{ alignSelf: 'flex-start' }}>Create Post</Text>
      <CreatePostForm />
    </View>
  );
}
