// Import
import React from 'react';
import {
  Text,
  RefreshControl,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import PostBox from '../components/PostBox';

// Export feed screen
export default function FeedScreen() {
  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);
  const [tags, setTags] = React.useState('Trending');
  const showButton = React.useRef(false);
  const page = React.useRef(0);
  const status = React.useRef(0);

  function fetchPost() {
    (async () => {
      if (refreshing) {
        await fetch('https://cu-there-server.herokuapp.com/fetchPost', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: '',
            page,
            tags,
          }),
        })
          .then((res) => {
            status.current = res.status;
            return res;
          })
          .then((res) => res.json())
          .then((res) => {
            if (status.current === 200) {
              setList(res.posts);
              setRefreshing(false);
            } else if (status.current === 422) {
              console.log(res.error);
            }
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  function generate() {
    return list.map((post) => (
      <PostBox key={post._id} post={post} showButton={showButton.current} />
    ));
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing, tags]);

  return (
    <View style={{ marginBottom: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            setTags('Newest');
            onRefresh();
          }}
          style={{ margin: 15 }}
        >
          <Text style={{ color: '#546eff', fontSize: 18 }}>Latest</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTags('Trending');
            onRefresh();
          }}
          style={{ margin: 15 }}
        >
          <Text style={{ color: '#546eff', fontSize: 18 }}>Trending</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View>{generate()}</View>
      </ScrollView>
    </View>
  );
}
