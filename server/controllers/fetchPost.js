// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = async function fetchPost(req, res) {
  const { page, tags } = req.body;
  let post = null;
  if (tags === '') {
    post = await Post.find({})
      .sort({ timestamp: -1 })
      .skip(25 * page)
      .limit(25);
  } else
    post = await Post.find({ tags })
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
