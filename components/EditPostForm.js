// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Source from '../assets/source';
import Style from '../assets/style';
import TagsPicker from './TagsPicker';

// Export edit post form
export default function EditPostForm({ post }) {
  const navigation = useNavigation();

  const [newContent, setNewContent] = React.useState(post.content);
  const [newTags, setNewTags] = React.useState(post.tags);
  const [newTitle, setNewTitle] = React.useState(post.title);

  const status = React.useRef(0);

  async function editPost() {
    await fetch(`https://${Source.heroku}/editPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: post._id,
        title: newTitle,
        content: newContent,
        tags: newTags,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          navigation.navigate('Profile');
        } else if (status.current === 422) {
          switch (res.error) {
            // Title error
            case 'emptyTitleError':
              return Alert.alert(
                'Title is empty',
                'The title cannot be blank. Please try again.',
                [
                  {
                    text: 'Retry',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            // Content error
            case 'emptyContentError':
              return Alert.alert(
                'Content is empty',
                'The post cannot be empty. Please try again.',
                [
                  {
                    text: 'Retry',
                    onPress: () => undefined,
                    style: 'cancel',
                  },
                ]
              );

            // Unknown error
            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignContent: 'center',
        minWidth: '96%',
      }}
    >
      <Text>Edit your post below!</Text>
      <TextInput
        style={Style.SectionStyle}
        placeholder="Post title"
        defaultValue={post.title}
        onChangeText={(text) => setNewTitle(text)}
      />
      <TextInput
        style={Style.createPostBox}
        multiline
        scrollEnabled
        enablesReturnKeyAutomatically
        placeholder="What's on your mind?"
        defaultValue={post.content}
        onChangeText={(text) => setNewContent(text)}
      />
      <TagsPicker callback={setNewTags} value={newTags} />
      <Button title="Post!" onPress={editPost} />
    </View>
  );
}
