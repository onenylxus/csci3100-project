// Import
import React from 'react';
import { Text, View } from 'react-native';
import Style from '../assets/style';
import CreatePostForm from '../components/CreatePostForm';

// Export create post screen
export default function CreatePostScreen() {
  return (
    <View style={Style.container}>
      <Text>Create Post</Text>
      <CreatePostForm />
    </View>
  );
}
