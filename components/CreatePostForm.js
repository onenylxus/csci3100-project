/**
 * CU There Team
 * @component CreatePostForm - User can create post
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in CreatePostScreen
 * PURPOSE: This module creates a post in database
 */

// Import
import React from 'react';
import {
  Alert,
  Button,
  Switch,
  Text,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppContext from './AppContext';
import TagsPicker from './TagsPicker';
import Style from '../assets/style';

const windowWidth = Dimensions.get('window').width;

// Export Create Post Form
export default function CreatePostForm() {
  const navigation = useNavigation();
  const { getUser } = React.useContext(AppContext);

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
          setContent('');
          setTitle('');
          setTags('');
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
    <View style={Style.createPostContainer}>
      <View style={Style.createPostInner}>
        <Text style={{ alignSelf: 'center', marginRight: 10 }}>
          Post Anonymously?
        </Text>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>
      <View>
        <View style={Style.postTitleBox}>
          <TextInput
            style={{
              minWidth: '100%',
              maxWidth: '100%',
              ...hideOutline(windowWidth),
            }}
            placeholder="Post title"
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={Style.createPostBox}>
          <TextInput
            style={windowWidth < 800 ? null : Style.postTextInputPC}
            multiline
            scrollEnabled
            enablesReturnKeyAutomatically
            placeholder="What's on your mind?"
            onChangeText={(text) => setContent(text)}
          />
        </View>
        <View style={{ width: '75%', alignSelf: 'center' }}>
          <TagsPicker callback={setTags} value={tags} />
        </View>
        <View style={{ maxWidth: '40%', alignSelf: 'center', marginTop: '2%' }}>
          <Button title="Post!" onPress={submitData} />
        </View>
      </View>
    </View>
  );
}
