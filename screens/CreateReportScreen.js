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
      <CreateReportForm post={post} />
    </View>
  );
}
