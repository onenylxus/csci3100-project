/**
 * CU There Team
 * @component CommentContainer - generate Comment components
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Locate in PostContainer
 * PURPOSE: This module generates all comments in the post
 */

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
      <Comment key={comment._id} comment={comment} />
    ));
  }

  return (
    <View>
      <ScrollView>
        <View>{generate()}</View>
        <CreateCommentForm post={post} />
      </ScrollView>
    </View>
  );
}
