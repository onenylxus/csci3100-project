// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import Style from '../assets/style';

// Export Follower container
export default function FollowerContainer({ username }) {
  return (
    <View>
      <View style={{ flexDirection: 'row', marginVertical: 20 }}>
        <Image
          style={Style.followScreenIcon}
          source={require('../assets/images/profile.png')}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              alignSelf: 'center',
              fontWeight: 'bold',
            }}
          >
            {username}
          </Text>
        </View>
      </View>
    </View>
  );
}
