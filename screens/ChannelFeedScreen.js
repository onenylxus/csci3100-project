/**
 * CU There Team
 * @Component ChannelFeedScreen - A screen for displaying all the posts of a particular channel
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Navigated from ChannelScreen
 * PURPOSE: This is the ChannelFeedScreen in which it will call and display all the PostContainer
 * with specific channel tag
 */

// Import
import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import PostContainer from '../components/PostContainer';

// Export ChannelFeedScreen
export default function ChannelFeedScreen() {
  const route = useRoute();
  const { tags } = route.params;

  const [refreshing, setRefreshing] = React.useState(true);
  const [list, setList] = React.useState([]);

  const page = React.useRef(0);
  const status = React.useRef(0);

  // Fetch posts of a particular channel
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

  // Generate all the posts fetched
  function generate() {
    return list.map((post) => <PostContainer key={post._id} post={post} />);
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing, tags]);

  return (
    // Enable ScrollView
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {/* Generate all the posts fetched */}
      <View>{generate()}</View>
    </ScrollView>
  );
}
