// Import
import React from 'react';
import { View, ImageBackground } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
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
