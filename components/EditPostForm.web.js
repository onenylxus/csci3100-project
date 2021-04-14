// Import
import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeAlert from 'react-native-awesome-alerts';
import Style from '../assets/style';
import TagsPicker from './TagsPicker';

// Export edit post form
export default function EditPostForm({ post }) {
  const navigation = useNavigation();

  const [newContent, setNewContent] = React.useState(post.content);
  const [newTags, setNewTags] = React.useState(post.tags);
  const [newTitle, setNewTitle] = React.useState(post.title);

  const [showAlert, setShowAlert] = React.useState(false);

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
          console.log(res);
          setShowAlert(true);
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Your title or content is empty"
        message="Your title or content cannot be blank, please try again."
        closeOnHardwareBackPress
        closeOnTouchOutside
        showConfirmButton
        confirmText="OK"
        confirmButtonColor="#DD6B55"
        onConfirmPressed={() => {
          setShowAlert(false);
        }}
        contentContainerStyle={100}
      />
    </View>
  );
}
