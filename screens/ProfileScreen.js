// Import
import React from 'react';
import { Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export profile screen
export default function ProfileScreen({ navigation }) {
  return (
    <View style={Style.container}>
      <View style={Style.profilePicture}>
        <View>
          <FontAwesomeIcon icon={faUserPlus} size={150} />
          <Button
            title="Edit Profile"
            onPress={() => navigation.navigate('EditProfile')}
          />
          <Text style={Style.profileUsername}>
            Username{'\n'}
            Major: XXXXXX{'\n'}
            College: XXXXX{'\n'}
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text>Current Posts</Text>
        </View>
      </View>
    </View>
  );
}
