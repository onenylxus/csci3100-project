// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Comment');

// Models
const Comment = mongoose.model('comment');

// Exports
module.exports = function createComment(req, res) {
  // Fetch request body
  const { _id, username, content } = req.body;

  if (content === '') {
    return res.status(422).send({
      error: 'missingContentError',
    });
  }

  // Create comment and save to database
  const comment = new Comment({
    postId: _id,
    username,
    content,
  });
  comment
    .save()
    .then(res.status(200).send({ msg: 'Comment created' }))
    .catch((err) => console.log(err));
};
