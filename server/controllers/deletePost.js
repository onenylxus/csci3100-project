// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');
require('../schemas/Comment');
// Models
const Post = mongoose.model('post');
const Comment = mongoose.model('Comment');

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
