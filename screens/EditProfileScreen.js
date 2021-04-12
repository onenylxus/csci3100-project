// Import
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';
import Style from '../assets/style';

// Export edit profile screen
export default function EditProfileScreen() {
  const windowWidth = Dimensions.get('window').width;

  function styleByDevice(widthOfDevice, component) {
    if (widthOfDevice < 1100) {
      // Style of Small Screen
      switch (component) {
        case 'width':
          return '100%';

        case 'pickerWidth':
          return '100%';

        case 'scrollBar':
          return false;

        default:
          break;
      }
    }

    // Style of Large Screen
    switch (component) {
      case 'width':
        return 550;

      case 'pickerWidth':
        return 250;

      case 'scrollBar':
        return true;

      default:
        break;
    }
  }

  return (
    <View style={Style.container}>
      <ScrollView
        showsVerticalScrollIndicator={styleByDevice(windowWidth, 'scrollBar')}
      >
        <Text style={Style.editProfileHeading}>Edit Your Profile</Text>
        <EditProfileForm />
      </ScrollView>
    </View>
  );
}
