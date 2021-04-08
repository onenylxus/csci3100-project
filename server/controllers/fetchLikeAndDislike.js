// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchLikeAndDislike(req, res) {
  // Fetch request body
  const { postId } = req.postId;

  // Fetch client
  const post = Post.findOne({ postId });
  console.log(postId);

  post.then((data) => {
    if (!data) {
      console.log(data);
      return res.status(422).send({});
    }

    return res.status(200).send({
      msg: 'Like and dislike fetched',
      like: data.peopleLike,
    });
  });
};
