// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import Style from '../assets/style';

// Export Leaderboard box
export default function LeaderboardBox({ username, popularity }) {
  return (
    <View style={Style.postBox}>
      <View style={{ flexDirection: 'row' }}>
        <Grid>
          <Col style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Text>#1</Text>
            <Image
              style={{
                width: 32,
                height: 32,
                marginHorizontal: 8,
                marginTop: 4,
                borderRadius: 28,
              }}
              source={require('../assets/images/profile.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>
                Username: {username}
              </Text>
              <Text>Popularity: {popularity}</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
}
