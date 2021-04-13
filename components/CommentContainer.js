// Import
import React from 'react';
import { View, ScrollView } from 'react-native';
import CreateCommentForm from './CreateCommentForm';
import Comment from './Comment';

// Export
export default function CommentContainer({ post, state }) {
  const [list, setList] = React.useState([]);

  const status = React.useRef(0);
  const postId = React.useRef(post._id);

  function fetchComment() {
    (async () => {
      await fetch('https://cu-there-server.herokuapp.com/fetchComment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _id: postId.current,
        }),
      })
        .then((res) => {
          status.current = res.status;
          return res;
        })
        .then((res) => res.json())
        .then((res) => {
          if (status.current === 200) {
            setList(res.comment);
          } else if (status.current === 422) {
            console.log(res.error);
          }
        })
        .catch((err) => console.log(err));
    })();
  }

  React.useEffect(fetchComment, [state]);

  function generate() {
    return list.map((comment) => (
      <Comment key={comment.postId} comment={comment} />
    ));
  }

  return (
    <View style={{ marginBottom: 50 }}>
      <ScrollView>
        <View>{generate()}</View>
        <CreateCommentForm post={post} />
      </ScrollView>
    </View>
  );
}
