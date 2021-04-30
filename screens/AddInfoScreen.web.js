/**
 * CU There Team
 * @Component AddInfoScreen - A screen for showing the AddInfoForm in collecting user information

 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 * 
 * Navigated from RegisterStack
 * PURPOSE: This is the AddInfoScreen in which another component AddInfoForm is used to
 *          allow users who just registered to fill in some important information like real name, gender, major and college.
 * This is the web version of the module
 */

// Import
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import AddInfoForm from '../components/AddInfoForm.web';
import Style from '../assets/style';

// Export AddInfoScreen
export default function AddInfoScreen() {
  return (
    <View style={Style.container}>
      <View style={{ margin: '5%' }}>
        {/* Enable ScrollView */}
        <ScrollView
          style={{ height: '82%' }}
          showsVerticalScrollIndicator={false}
          scrollToEnd
        >
          <Text style={{ ...Style.loginTitle, fontSize: 25, marginTop: '5%' }}>
            Tell us more about you!
          </Text>
          {/* Call AddInfoForm */}
          <AddInfoForm />
        </ScrollView>
      </View>
    </View>
  );
}
