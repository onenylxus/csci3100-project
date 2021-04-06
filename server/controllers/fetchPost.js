// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchPost(req, res) {
  const { page } = req.body;

  const post = Post.find({})
    .sort({ timestamp: -1 })
    .skip(25 * page)
    .limit(25);

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no post in database.',
      });
    }

    return res.status(200).send({ msg: 'Post fetched.', posts: data });
  });
};
