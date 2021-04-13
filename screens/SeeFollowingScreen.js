// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import FollowerContainer from '../components/FollowerContainer';

// Export seeFollower screen
export default function SeeFollowerScreen() {
  const route = useRoute();
  const { username } = route.params;
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
          other: username,
        }),
      })
        .then((res) => {
          status.current = res.status;
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          if (status.current === 200) {
            setList(res.following);
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
