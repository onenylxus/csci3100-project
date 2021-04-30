/**
 * CU There Team
 * @component EditProfileScreen - A screen which provide a EditProfileForm for users to edit their own profile
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
 *
 * PURPOSE: This is the EditProfileScreen in which another component EditProfileForm is used to
 *          allow users to make ammendments including modifying their biography, name, major, etc in their profile
 */

// Import
import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';
import EditProfileForm from '../components/EditProfileForm';
import Style from '../assets/style';

// Export edit profile screen
export default function EditProfileScreen() {
  // get the screen size of device
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
      {/* Enable ScrollView */}
      <ScrollView
        showsVerticalScrollIndicator={styleByDevice(windowWidth, 'scrollBar')}
      >
        <View>
          <Text style={Style.editProfileHeading}>Edit Your Profile</Text>
          <EditProfileForm />
        </View>
      </ScrollView>
    </View>
  );
}
