// Import
import React from 'react';
import { View } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
  return (
    <View style={Style.container}>
      <CreatePostForm />
    </View>
  );
}
