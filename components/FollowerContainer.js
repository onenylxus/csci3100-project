// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import Style from '../assets/style';

// Export Follower container
export default function FollowerContainer({ username }) {
  return (
    <View style={Style.FollowerContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Grid>
          <Col style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Image
              style={Style.userIcon}
              source={require('../assets/images/profile.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {username}
              </Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
}
