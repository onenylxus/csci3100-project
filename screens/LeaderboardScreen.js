// Import
import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Grid, Col } from 'react-native-easy-grid';
import LeaderboardBox from '../components/LeaderboardBox';
import Source from '../assets/source';
import Style from '../assets/style';

// Export Leaderboard screen
export default function LeaderboardScreen() {
  const [list, setList] = React.useState([]);

  const windowWidth = Dimensions.get('window').width;
  const status = React.useRef(0);

  function fetchUsername() {
    (async () => {
      await fetch(`https://${Source.heroku}/fetchUsername`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      })
        .then((res) => {
          status.current = res.status;
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          if (status.current === 200) {
            setList(res.data);
          } else if (status.current === 422) {
            console.log(res.error);
          }
        })
        .catch((err) => console.log(err));
    })();
  }

  function generate() {
    return list.map((data) => (
      <LeaderboardBox username={data.username} popularity={data.popularity} />
    ));
  }

  React.useEffect(fetchUsername);

  if (windowWidth >= 1100) {
    // Large Screen
    return (
      <Grid style={Style.profileContainerPC}>
        <Col size={1} style={Style.LeaderboardLeft}>
          <ScrollView>
            <View>{generate()}</View>
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
        <View>{generate()}</View>
      </ScrollView>
    </View>
  );
}
