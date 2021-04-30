/**
 * CU There Team
 * @component EditPostForm - Users can edit their posts and update entry to database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in PostContainer (in ProfileScreen)
 * PURPOSE: This module updates the post database
 * This is the native version of the module.
 */

// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    await fetch('https://cu-there-server.herokuapp.com/editPost', {
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
    <View style={Style.editPostContainer}>
      <Text style={Style.editPostHeading}>Edit your post below!</Text>
      <View style={Style.editPostSection}>
        <View style={Style.editPostSectionText}>
          <Text style={{ alignSelf: 'center' }}>Title: </Text>
        </View>
        <TextInput
          style={Style.SectionStyle}
          placeholder="Post title"
          defaultValue={post.title}
          onChangeText={(text) => setNewTitle(text)}
        />
      </View>
      <View style={Style.editPostSection}>
        <View style={Style.editPostSectionText}>
          <Text style={{ alignSelf: 'center' }}>Post: </Text>
        </View>
        <TextInput
          style={Style.editPostContentBox}
          multiline
          scrollEnabled
          enablesReturnKeyAutomatically
          placeholder="What's on your mind?"
          defaultValue={post.content}
          onChangeText={(text) => setNewContent(text)}
        />
      </View>
      <TagsPicker callback={setNewTags} value={newTags} />
      <View style={{ marginHorizontal: '40%', marginVertical: 10 }}>
        <Button title="Save" onPress={editPost} />
      </View>
    </View>
  );
}
