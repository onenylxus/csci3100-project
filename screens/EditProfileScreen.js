// Import
import React from 'react';
import { Text, View, Button } from 'react-native';
import Style from '../assets/style';

// Export chatroom screen
export default function EditProfileScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <Text>Edit Peofile</Text>
      <View style={{ flexDirection: 'row', margin: 20 }}>
        <View style={{ margin: 20 }}>
          <Button
            title="Submit"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
        <View style={{ margin: 20 }}>
          <Button
            title="Cancel"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
}
