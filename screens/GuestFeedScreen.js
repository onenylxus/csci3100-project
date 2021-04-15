// Import
import React from 'react';
import { Button, RefreshControl, ScrollView, Text, View } from 'react-native';
import PostContainer from '../components/PostContainer';

// Export guest feed screen
export default function GuestFeedScreen() {
  const [refreshing, setRefreshing] = React.useState(true);
  const [postList, setPostList] = React.useState([]);
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
            page: page.current,
            tags: '',
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
    return list.map((post) => <PostContainer key={post._id} post={post} />);
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing]);

  return (
    <View style={{ marginBottom: 50 }}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ flex: 1 }}>
          <View>{generate()}</View>
        </View>
        <Text style={{ alignSelf: 'center' }}>{`Page ${
          page.current + 1
        }`}</Text>
        {page.current > 0 ? (
          <Button
            title="Previous page"
            onPress={() => {
              page.current--;
              onRefresh();
            }}
          />
        ) : (
          <View />
        )}
        {postList.length === 25 ? (
          <Button
            title="Next page"
            onPress={() => {
              page.current++;
              onRefresh();
            }}
          />
        ) : (
          <View />
        )}
      </ScrollView>
    </View>
  );
}
