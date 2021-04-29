/**
 * CU There team
 * @component createComment - A controller to create comment in comment database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by CreateCommentForm
 * PURPOSE: This controller create comment in comment database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Comment');
require('../schemas/Post');

// Models
const Comment = mongoose.model('comment');
const Post = mongoose.model('post');

// Exports
module.exports = function createComment(req, res) {
  // Fetch request body
  const { _id, username, content } = req.body;

  if (content === '') {
    return res.status(422).send({
      error: 'missingContentError',
    });
  }

  // Create comment and save to database
  const comment = new Comment({
    postId: _id,
    username,
    content,
  });
  comment.save();

  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'post not found',
      });
    }
    data
      .update({
        $inc: { popularity: 1 },
      })
      .exec();
    return res
      .status(200)
      .send({ msg: 'Comment created with popularity updated' });
  });
};
