// Import
import React from 'react';
import { TextInput, View, Text } from 'react-native';
import Style from '../assets/style';

// Export Create Post Form
export default function CreatePostForm() {
  // const [post, setPost] = React.useState('');

  return (
    <View style={Style.inputContainer}>
      <Text>Create Post</Text>
      <TextInput
        style={Style.createPostBox}
        multiline
        scrollEnabled
        enablesReturnKeyAutomatically
        placeholder="What's on your mind?"
        // onChangeText={(text) => setPost(text)}
      />
    </View>
  );
}
