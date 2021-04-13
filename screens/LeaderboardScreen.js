// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import LeaderboardContainer from '../components/LeaderboardContainer';
import Style from '../assets/style';

// Export Leaderboard screen
export default function LeaderboardScreen() {
  const [list, setList] = React.useState([]);

  const status = React.useRef(0);

  function fetchUsername() {
    (async () => {
      await fetch(`https://cu-there-server.herokuapp.com/fetchUsername`, {
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
      <LeaderboardContainer
        key={data.username}
        username={data.username}
        popularity={data.popularity}
        rank={list.indexOf(data) + 1}
      />
    ));
  }

  React.useEffect(fetchUsername);

  return (
    <View style={Style.leaderboardBackground}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{generate()}</View>
      </ScrollView>
    </View>
  );
}
