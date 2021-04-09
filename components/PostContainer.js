// Import
import React from 'react';
import { View } from 'react-native';
import PostBox from './PostBox';
import Source from '../assets/source';

// Export post container
export default function PostContainer({ tags }) {
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

  React.useEffect(fetchPost, [page, state, tags]);

  return <View>{generate()}</View>;
}
