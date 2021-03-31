// Import
import React from 'react';
import { Text, View } from 'react-native';
import AddInfoForm from '../components/AddInfoForm';
import Style from '../assets/style';

// Export register screen
export default function AddInfoScreen() {
  return (
    <View style={Style.container}>
      <Text style={Style.loginTitle}>Please tell us more about you!</Text>
      <AddInfoForm />
    </View>
  );
}
