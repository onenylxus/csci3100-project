/**
 * CU There Team
 * @component EditPostScreen - A screen which provide a EditPostForm for users to edit their own posts
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from ProfileScreen
 * PURPOSE: This is the EditPostScreen in which another component EditPostForm is used to
 *          allow users to make ammendments including modifying the content and title to their own posts
 */

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
