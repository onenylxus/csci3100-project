// Import
import React from 'react';
import { View } from 'react-native';
// import { List } from 'react-native-paper';
import PostBox from './PostBox';
import Source from '../assets/source';

// Export post container
export default function PostContainer() {
  // const [page, setPage] = React.useState(0);
  const [state, setState] = React.useState(false);

  const page = React.useRef(0);
  const list = React.useRef([]);

  const status = React.useRef(0);

  function fetchPost() {
    (async () => {
      if (!state) {
        await fetch(`https://${Source.heroku}/fetchPost`, {
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
              list.current = res.posts;
            }
            setState(true);
          })
          .catch((err) => console.log(err));
      }
    })();
  }

  function generate() {
    return list.current.map((post) => <PostBox key={post._id} post={post} />);
  }

  React.useEffect(fetchPost, [page, state]);

  return <View>{generate()}</View>;
}
