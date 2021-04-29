/**
 * CU There Team
 * @component deletePost - A controller to delete post in post database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by SettingScreen
 * PURPOSE: This controller delete client in client database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');
require('../schemas/Comment');

// Models
const Post = mongoose.model('post');
const Comment = mongoose.model('comment');

// Exports
module.exports = function deletePost(req, res) {
  // Fetch request body
  const { _id } = req.body;

  // Fetch post and comment
  const post = Post.findOne({ _id });
  const comment = Comment.find({ postId: _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({ msg: 'Post not found' });
    }
    data.deleteOne({});
  });

  comment.then((data1) => {
    if (!data1) {
      return res
        .status(200)
        .send({ msg: 'Post deleted with no comment.' })
        .catch((err) => console.log(err));
    }
    data1
      .deleteMany({ postId: _id })
      .then(res.status(200).send({ msg: 'Post deleted with comments' }))
      .catch((err) => console.log(err));
  });
};
