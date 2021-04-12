// Import
import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import LeaderboardBox from '../components/LeaderboardBox';
import Style from '../assets/style';

// Export Leaderboard screen
export default function LeaderboardScreen() {
  const windowWidth = Dimensions.get('window').width;

  if (windowWidth >= 1100) {
    // Large Screen
    return (
      <Grid style={Style.profileContainerPC}>
        <Col size={1} style={Style.LeaderboardLeft}>
          <ScrollView>
            <LeaderboardBox />
          </ScrollView>
        </Col>
        <Col size={2} style={Style.LeaderboardRight}>
          <ScrollView>
            <Text style={{ fontSize: 40 }}>Your Messages</Text>
          </ScrollView>
        </Col>
      </Grid>
    );
  }

  // Small Screen
  return (
    <View style={{ marginBottom: 50 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LeaderboardBox />
      </ScrollView>
    </View>
  );
}
