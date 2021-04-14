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
    <ScrollView
      stickyHeaderIndices={[0]}
      style={{ marginBottom: '1%' }}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            backgroundColor: '#f2f2f2',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setTags('Newest');
              onRefresh();
            }}
            style={{
              margin: 15,
              borderBottomWidth: underlineTag('Newest', tags),
              borderColor: '#546eff',
            }}
          >
            <Text
              style={{
                color: '#546eff',
                fontSize: 18,
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
            style={{
              margin: 15,
              borderBottomWidth: underlineTag('Trending', tags),
              borderColor: '#546eff',
            }}
          >
            <Text
              style={{
                color: '#546eff',
                fontSize: 18,
              }}
            >
              Trending
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View>{generate()}</View>
      </View>
    </ScrollView>
  );
}
