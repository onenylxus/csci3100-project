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
    console.log(data);
    return res.status(200).send({ msg: 'Comment fetched.', comment: data });
  });
};
