// Import
import React from 'react';
import { Button, RefreshControl, ScrollView, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import PostBox from '../components/PostBox';
import Source from '../assets/source';

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
        await fetch(`https://${Source.heroku}/fetchPost`, {
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
      <SearchBar />
      <View>
        <Button
          title="Newest"
          onPress={() => {
            setTags('Newest');
            onRefresh();
          }}
        />
        <Button
          title="Trending"
          onPress={() => {
            setTags('Trending');
            onRefresh();
          }}
        />
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
