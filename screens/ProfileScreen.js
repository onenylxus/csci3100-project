// Import
import React from 'react';
import { Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export profile screen
export default function ProfileScreen() {
  return (
    <View style={Style.container}>
      <View style={Style.profilePicture}>
        <View>
          <FontAwesomeIcon icon={faUserPlus} size={150} />
          <Button
            title="Edit Profile"
            onPress={() => console.log(`Edit profile request sent.`)}
          />
          <Text style={Style.profileUsername}>
            <br />
            Username
            <br />
            Major: XXXXXX
            <br />
            College: XXXXX
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text>Current Posts</Text>
        </View>
      </View>
    </View>
  );
}
