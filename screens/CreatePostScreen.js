// Import
import React from 'react';
import { View, Button } from 'react-native';
import CreatePostForm from '../components/CreatePostForm';
import Style from '../assets/style';

// Export create post screen
export default function CreatePostScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <CreatePostForm />
      <Button title="Post it!" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}
