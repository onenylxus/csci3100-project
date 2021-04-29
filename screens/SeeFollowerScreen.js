/**
 * CU There Team
 * @component SeeFollowingScreen - A screen to see followers
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from ProfileScreen
 * PURPOSE: This screen shows who follow the client
 */

// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FollowerContainer from '../components/FollowerContainer';

// Export seeFollower screen
export default function SeeFollowerScreen() {
  const route = useRoute();
  const { user } = route.params;
  const [list, setList] = React.useState([]);

  const status = React.useRef(0);

  function fetchFollow() {
    (async () => {
      await fetch(`https://cu-there-server.herokuapp.com/fetchFollow`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
        }),
      })
        .then((res) => {
          status.current = res.status;
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          if (status.current === 200) {
            setList(res.follower);
          } else if (status.current === 422) {
            console.log(res.error);
          }
        })
        .catch((err) => console.log(err));
    })();
  }

  function generate() {
    return list.map((data) => <FollowerContainer username={data} key={data} />);
  }

  React.useEffect(fetchFollow);

  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>{generate()}</View>
      </ScrollView>
    </View>
  );
}
