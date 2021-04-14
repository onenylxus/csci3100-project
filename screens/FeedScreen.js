// Import
import React from 'react';
import {
  Text,
  RefreshControl,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import PostContainer from '../components/PostContainer';

// Export feed screen
export default function FeedScreen() {
  const [refreshing, setRefreshing] = React.useState(true);
  // const [clientList, setClientList] = React.useState([]);
  const [postList, setPostList] = React.useState([]);
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
              setPostList(res.posts);
              // setClientList(res.clients);
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
    return postList.map((post) => (
      <PostContainer
        key={post._id}
        post={post}
        showButton={showButton.current}
      />
    ));
  }

  function underlineTag(clickingTag, tag) {
    if (clickingTag === 'Trending') {
      if (tag === 'Trending') {
        return 1;
      }
      return 0;
    }
    if (tag === 'Newest') {
      return 1;
    }
    return 0;
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
          <Text
            style={{
              color: '#546eff',
              fontSize: 18,
              borderBottomWidth: underlineTag('Newest', tags),
              borderColor: '#546eff',
            }}
          >
            Latest
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTags('Trending');
            onRefresh();
          }}
          style={{ margin: 15 }}
        >
          <Text
            style={{
              color: '#546eff',
              fontSize: 18,
              borderBottomWidth: underlineTag('Trending', tags),
              borderColor: '#546eff',
            }}
          >
            Trending
          </Text>
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
