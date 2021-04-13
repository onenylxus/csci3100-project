// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchLike(req, res) {
  // Fetch request body
  const { _id } = req.body;

  // Fetch client
  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({});
    }

    return res.status(200).send({
      msg: 'Like and dislike fetched',
      like: data.peopleLike,
    });
  });
};
