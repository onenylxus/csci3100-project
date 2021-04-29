/**
 * CU There Team
 * @component GuestFeedScreen - A screen displaying all the posts created for guest users
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
 * are displayed and sorted according the time or popularity of the posts
 * Some of the features, e.g. like or comment are not available for guest users
 */

// Import
import React from 'react';
import {
  Button,
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PostContainer from '../components/PostContainer';

// Export guest feed screen
export default function GuestFeedScreen() {
  const [refreshing, setRefreshing] = React.useState(true);
  const [scrollRef, setScrollRef] = React.useState(null);
  const [postList, setPostList] = React.useState([]);
  const [list, setList] = React.useState([]);
  const [tags, setTags] = React.useState('Trending');

  const page = React.useRef(0);
  const status = React.useRef(0);

  // Fetch all posts
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

  // Style for the sorting criteria "Newest" and "Trending"
  function underlineTag(clickingTag, tag) {
    if (clickingTag === 'Trending') {
      if (tag === 'Trending') {
        return 2;
      }
      return 0;
    }
    if (tag === 'Newest') {
      return 2;
    }
    return 0;
  }

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 30000);
  }, []);

  React.useEffect(fetchPost, [refreshing, tags]);

  return (
    // Enable ScrollView
    <ScrollView
      ref={(ref) => setScrollRef(ref)}
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
            {/*  Newest button */}
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
            {/*  Trending button */}
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
        {/* Generate all the posts fetched */}
        <View>{generate()}</View>
      </View>
      <Text style={{ alignSelf: 'center' }}>{`Page ${page.current + 1}`}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        {page.current > 0 ? (
          <View style={{ maxWidth: '40%', alignSelf: 'center' }}>
            {/* Previous Page button */}
            <Button
              title="Previous page"
              onPress={() => {
                page.current--;
                scrollRef.scrollTo({ x: 0, y: 0, animated: true });
                onRefresh(true);
              }}
            />
          </View>
        ) : (
          <View />
        )}
        {postList.length === 25 ? (
          <View
            style={{
              justifyContent: 'flex-end',
              maxWidth: '40%',
              alignSelf: 'center',
            }}
          >
            {/* Next Page button */}
            <Button
              title="Next page"
              onPress={() => {
                page.current++;
                scrollRef.scrollTo({ x: 0, y: 0, animated: true });
                onRefresh(true);
              }}
            />
          </View>
        ) : (
          <View />
        )}
      </View>
    </ScrollView>
  );
}
