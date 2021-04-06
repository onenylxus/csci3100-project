// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchPost(req, res) {
  const post = Post.find({}).sort({ timestamp: -1 }).limit(1);

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no post in database.',
      });
    }
    console.log(data.username);
    console.log(data.timestamp);
    console.log(data.content);
    return res.status(200).send({ msg: 'Post fetched.' });
  });
};
