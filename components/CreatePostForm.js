// Import
import React from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AuthContext from './AuthContext';
import Source from '../assets/source';
import Style from '../assets/style';

const windowWidth = Dimensions.get('window').width;

// Export Create Post Form
export default function CreatePostForm() {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AuthContext);

  const [username, setUsername] = React.useState('');
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [tags, setTags] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState(false);

  const status = React.useRef(0);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  function fetchData() {
    getUser(setUsername);
  }

  async function submitData() {
    await fetch('https://cu-there-server.herokuapp.com/createPost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: isEnabled ? 'Anonymous' : username,
        content,
        title,
        tags,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (status.current === 200) {
          navigation.navigate('Profile');
        } else if (status.current === 422) {
          switch (res.error) {
            // Empty title
            case 'missingTitleError':
              return Alert.alert(
                'Title is blank',
                'Please enter a title for your post.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'destructive',
                  },
                ]
              );

            case 'missingContentError':
              return Alert.alert(
                'Content is blank.',
                'Please tell us what is on your mind.',
                [
                  {
                    text: 'OK',
                    onPress: () => undefined,
                    style: 'destructive',
                  },
                ]
              );

            default:
              return new Error();
          }
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchData);

  function hideOutline(screenWidth) {
    if (screenWidth < 800) {
      return null;
    }
    return { outline: 'none' };
  }

  return (
    <View style={Style.inputContainer}>
      <Text>Hello</Text>
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
