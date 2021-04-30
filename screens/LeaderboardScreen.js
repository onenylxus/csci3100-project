/**
 * @component LeaderboardScreen - A screen displaying the ranking of users according to
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from GuestFeedStack
 * PURPOSE: This is the GuestFeedScreen in which all the posts regardless of their channel tags
 *          are displayed and sorted according the time or popularity of the posts
 * Some of the features, e.g. like or comment are not available for guest users
 */

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
