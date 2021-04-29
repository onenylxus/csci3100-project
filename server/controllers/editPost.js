/**
 * CU There Team
 * @component editPost - A controller to edit post
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by EditPostForm
 * PURPOSE: This controller updates post in post database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function editPost(req, res) {
  // Fetch request body
  const { _id, title, content, tags } = req.body;

  if (content === '') {
    return res.status(422).send({
      error: 'emptyContentError',
    });
  }

  if (title === '') {
    return res.status(422).send({
      error: 'emptyTitleError',
    });
  }

  // Fetch post
  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({ msg: 'Post not found' });
    }

    data
      .update({
        $set: {
          title,
          content,
          tags,
        },
      })
      .exec();

    return res.status(200).send({ msg: 'Post updated' });
  });
};
