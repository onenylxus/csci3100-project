// Import
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import AddInfoForm from '../components/AddInfoForm.web';
import Style from '../assets/style';

// Export register screen
export default function AddInfoScreen() {
  return (
    <View style={Style.container}>
      <View style={{ margin: '5%' }}>
        <ScrollView
          style={{ height: '82%' }}
          showsVerticalScrollIndicator={false}
          scrollToEnd
        >
          <Text style={{ ...Style.loginTitle, fontSize: 25, marginTop: '5%' }}>
            Tell us more about you!
          </Text>
          <AddInfoForm />
        </ScrollView>
      </View>
    </View>
  );
}
