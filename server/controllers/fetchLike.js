/**
 * CU There Team
 * @component fetchLike - A controller to fetch like
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by PostContainer
 * PURPOSE: This controller fetches number of like in post database
 */

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
