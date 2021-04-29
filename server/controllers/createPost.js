/**
 * CU There Team
 * @component createPost - A controller to create post
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by CreatePostForm
 * PURPOSE: This controller creates post in post database
 */

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
    peopleLike: [],
    peopleDislike: [],
    popularity: 0,
  });
  post
    .save()
    .then(res.status(200).send({ msg: 'Post created' }))
    .catch((err) => console.log(err));
};
