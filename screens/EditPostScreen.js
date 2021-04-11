// Import
import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import EditPostForm from '../components/EditPostForm';
import Style from '../assets/style';

// Export edit post screen
export default function EditPostScreen() {
  const route = useRoute();
  const { post } = route.params;
  return (
    <View style={Style.container}>
      <EditPostForm post={post} />
    </View>
  );
}
