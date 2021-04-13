// Import
import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
  const windowWidth = Dimensions.get('window').width;
  const createPostWidth = Math.min(windowWidth, 800);

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
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={require('../assets/images/webBG.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <View
          style={{
            width: createPostWidth,
            alignSelf: 'center',
            height: '100%',
            justifyContent: 'center',
            marginBottom: windowWidth < 800 ? 0 : '10%',
          }}
        >
          <View>
            <CreatePostForm />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
