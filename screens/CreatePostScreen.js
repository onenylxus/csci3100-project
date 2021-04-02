// Import
import React from 'react';
import { View, Button } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
  const windowWidth = Dimensions.get('window').width;
  const loginFormWidth = Math.min(windowWidth, 800);

  if (windowWidth < 800) {
    return (
      <View style={Style.container}>
        <ImageBackground
          resizeMode="stretch"
          source={require('../assets/images/background.png')}
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
        >
          <View>
            <CreatePostForm />
          </View>
        </ImageBackground>
      </View>
    );
  }

  return (
    <View style={Style.container}>
      <CreatePostForm />
      <Button title="Post it!" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
