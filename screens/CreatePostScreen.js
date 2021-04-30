/**
 * CU There Team
 * @component CreatePostScreen - A screen which provide a CreatePostForm for users to create posts
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from CreatePostStack
 * PURPOSE: This is the CreatePostScreen in which another component CreatePostForm
 *          is used to allow users to create post to any channel
 */

// Import
import React from 'react';
import { View, ImageBackground, Dimensions } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen() {
  const windowWidth = Dimensions.get('window').width;
  const createPostWidth = Math.min(windowWidth, 800);

  // For small screen
  if (windowWidth < 800) {
    return (
      <View style={Style.container}>
        {/* Insert an image as the background of create post screen */}
        <ImageBackground
          resizeMode="stretch"
          source={require('../assets/images/background.png')}
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}
        >
          <View>
            {/* Call CreatePostForm */}
            <CreatePostForm />
          </View>
        </ImageBackground>
      </View>
    );
  }

  // For large screen
  return (
    <View style={{ flex: 1 }}>
      {/* Insert an image as the background of create post screen */}
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
            {/* Call CreatePostForm */}
            <CreatePostForm />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
