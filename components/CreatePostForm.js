// Import
import React from 'react';
import { Button, TextInput, View } from 'react-native';
import Style from '../assets/style';

// Export Create Post Form
export default function CreatePostForm() {
  // const [post, setPost] = React.useState('');

  return (
    <View style={Style.inputContainer}>
      <TextInput
        style={Style.createPostBox}
        placeholder="What's on your mind?"
        // onChangeText={(text) => setPost(text)}
      />
      <View>
        <Button
          title="Post it!"
          onPress={() => console.log(`Your post has been posted.`)}
        />
      </View>
    </View>
  );
}
