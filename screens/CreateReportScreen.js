/**
 * CU There Team
 * @component CreateReportScreen - A screen which provide a CreateReportForm for users to report posts
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from FeedScreen
 * PURPOSE: This is the CreateReportScreen in which another component CreateReportForm
 *          is used to allow users to put down their reasons for reporting post
 */

// Import
import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import CreateReportForm from '../components/CreateReportForm';
import Style from '../assets/style';

// Export create report screen
export default function CreateReportScreen() {
  const route = useRoute();
  const { post } = route.params;

  return (
    <View style={Style.container}>
      {/* Call CreateReportForm */}
      <CreateReportForm post={post} />
    </View>
  );
}
