// Import
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PostBox from '../components/PostBox';

// Export Channel Feed screen
export default function ChannelFeedScreen() {
  const route = useRoute();
  const { tags } = route.params;

  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);

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
            tags: tags.title,
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
    return list.map((post) => <PostBox key={post._id} post={post} />);
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing, tags]);

  return (
    <View style={{ marginBottom: 50 }}>
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
