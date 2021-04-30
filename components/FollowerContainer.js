/**
 * CU There Team
 * @component FollowerContainer - The design to fit the followers in the followers screen
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in the SeeFollowerScreen
 * PURPOSE: This module shows followers in the screen
 */

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
