// Import
import React from 'react';
import { Text, View, Button } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <Text style={{ alignSelf: 'flex-start' }}>Create Post</Text>
      <CreatePostForm />
      <Button title="Post it!" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
