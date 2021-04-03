// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function createPost(req, res) {
  // Fetch request body
  const { username, title, content, tags } = req.body;

  if (title === '') {
    return res.status(422).send({
      error: 'missingTitleError',
    });
  }
  if (content === '') {
    return res.status(422).send({
      error: 'missingContentError',
    });
  }

  // Create post and save to database
  const post = new Post({
    username,
    title,
    content,
    tags,
    numOfLike: 0,
    numOfDislike: 0,
  });
  post
    .save()
    .then(res.status(200).send({ msg: 'Post created' }))
    .catch((err) => console.log(err));
};
