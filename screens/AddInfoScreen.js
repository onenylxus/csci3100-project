// Import
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import AddInfoForm from '../components/AddInfoForm';
import Style from '../assets/style';

// Export register screen
export default function AddInfoScreen() {
  return (
    <View style={Style.container}>
      <ScrollView
        style={{ height: '82%' }}
        showsVerticalScrollIndicator={false}
        scrollToEnd
      >
        <Text style={Style.loginTitle}>Please tell us more about you!</Text>
        <AddInfoForm />
      </ScrollView>
    </View>
  );
}
