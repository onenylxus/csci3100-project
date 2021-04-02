// Import
import React from 'react';
import { TextInput, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';

// Export Create Post Form
export default function CreatePostForm() {
  const navigation = useNavigation();
  // const route = useRoute();
  // const { username } = route.params;
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');

  let status = 0;

  async function submitData() {
    await fetch(`https://${Source.heroku}/createPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content,
        title,
        tags,
      }),
    })
      .then((res) => {
        status = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status === 200) {
          navigation.navigate('Profile');
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View style={Style.inputContainer}>
      <TextInput
        style={Style.TextInput}
        placeholder="Post title"
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={Style.createPostBox}
        multiline
        scrollEnabled
        enablesReturnKeyAutomatically
        placeholder="What's on your mind?"
        onChangeText={(text) => setContent(text)}
      />
      <TextInput
        style={Style.TextInput}
        placeholder="Tags you want to add"
        onChangeText={(text) => setTags(text)}
      />
      <Button title="Post!" onPress={submitData} />
    </View>
  );
}
