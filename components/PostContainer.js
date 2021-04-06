// Import
import React from 'react';
import { Button, View } from 'react-native';
// import { List } from 'react-native-paper';
import PostBox from './PostBox';
import Source from '../assets/source';

// Export post container
export default function PostContainer() {
  const status = React.useRef(0);

  const [list, setList] = React.useState([]);
  const [page, setPage] = React.useState(0);

  function fetchPost() {
    fetch(`https://${Source.heroku}/fetchPost`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
      }),
    })
      .then((res) => {
        status.current = res.status;
        return res;
      })
      .then((res) => res.json())
      .then((res) => {
        if (status.current === 200) {
          setList(res.posts.map((post) => <PostBox post={post} />));
        }
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(fetchPost, [page]);

  return (
    <View>
      {list}
      <View>
        <Button title="Next Page" onPress={setPage(page + 1)} />
        <Button title="Previous Page" onPress={setPage(page - 1)} />
      </View>
    </View>
  );

  // [1, 2, 3].map(v => v * 2) // [2, 4, 6]
  // [data1, data2, data3].map(data => <PostBox id={data} />)
}
