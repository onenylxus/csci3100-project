// Import
import React from 'react';
import { Image, Text, View } from 'react-native';
import { Col, Grid } from 'react-native-easy-grid';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMedal } from '@fortawesome/free-solid-svg-icons';
import Style from '../assets/style';

// Export Leaderboard box
export default function LeaderboardBox({ username, popularity, rank }) {
  // Medal and Ranking
  function showMedal(ranking) {
    if (ranking === 1) {
      return (
        <FontAwesomeIcon
          icon={faMedal}
          style={{ color: '#ffd700', marginLeft: 10 }}
          size={30}
        />
      );
    }
    if (ranking === 2) {
      return (
        <FontAwesomeIcon
          icon={faMedal}
          style={{ color: '#c0c0c0', marginLeft: 10 }}
          size={30}
        />
      );
    }
    if (ranking === 3) {
      return (
        <FontAwesomeIcon
          icon={faMedal}
          style={{ color: '#cd7f32', marginLeft: 10 }}
          size={30}
        />
      );
    }
    return <Text style={Style.rankText}>#{rank}</Text>;
  }

  return (
    <View style={Style.LeaderboardBox}>
      <View style={{ flexDirection: 'row' }}>
        <Grid>
          <View style={{ width: '15%' }}>{showMedal(rank)}</View>
          <Col style={{ flexDirection: 'row', marginVertical: 20 }}>
            <Image
              style={Style.userIcon}
              source={require('../assets/images/profile.png')}
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {username}
              </Text>
              <Text>Popularity: {popularity}</Text>
            </View>
          </Col>
        </Grid>
      </View>
    </View>
  );
}
