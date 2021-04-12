// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchPost(req, res) {
  const { page, tags, username } = req.body;
  if (username === '') {
    if (tags === 'Newest') {
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
    } else if (tags === 'Trending') {
      const post = Post.find({})
        .sort({ popularity: -1 })
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
    } else {
      const post = Post.find({ tags })
        .sort({ timestamp: -1 })
        .skip(25 * page)
        .limit(25);

      post.then((data1) => {
        if (!data1) {
          return res.status(422).send({
            error: 'no post in database.',
          });
        }

        return res.status(200).send({ msg: 'Post fetched.', posts: data1 });
      });
    }
  } else {
    const post = Post.find({ username })
      .sort({ timestamp: -1 })
      .skip(25 * page)
      .limit(25);

    post.then((data2) => {
      if (!data2) {
        return res.status(422).send({
          error: 'no post in database.',
        });
      }

      return res.status(200).send({ msg: 'Post fetched.', posts: data2 });
    });
  }
};
