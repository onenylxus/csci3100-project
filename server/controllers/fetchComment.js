/**
 * CU There Team
 * @component fetchComment - A controller to fetch comment
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by CommentContainer
 * PURPOSE: This controller fetches comment in comment database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Comment');

// Models
const Comment = mongoose.model('comment');

// Exports
module.exports = function fetchComment(req, res) {
  // Fetch request body
  const { _id } = req.body;

  const comment = Comment.find({ postId: _id }).sort({ timestamp: 1 });

  comment.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no comment in database',
      });
    }
    return res.status(200).send({ msg: 'Comment fetched.', comment: data });
  });
};
