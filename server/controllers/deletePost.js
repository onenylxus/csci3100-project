// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function deletePost(req, res) {
  // Fetch request body
  const { _id } = req.body;

  // Fetch post
  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({ msg: 'Post not found' });
    }

    data
      .deleteOne({})
      .then(res.status(200).send({ msg: 'Post deleted' }))
      .catch((err) => console.log(err));
  });
};
