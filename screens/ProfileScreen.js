// Import
import React from 'react';
import { Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export profile screen
export default function ProfileScreen() {
  return (
    <View style={[Style.container, { flexDirection: 'column' }]}>
      <View style={Style.profilePicture}>
        <View>
          <FontAwesomeIcon icon={faUserPlus} size={150} style={{ flex: 1 }} />
          <Text style={{ flex: 3 }}>Username</Text>
        </View>
        <Button
          title="Edit Profile"
          onPress={() => console.log(`Edit profile request sent.`)}
        />
      </View>
      <View style={{ flex: 1 }}>Profile page</View>
    </View>
  );
}
