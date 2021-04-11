// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function editPost(req, res) {
  // Fetch request body
  const { _id, title, content, tags } = req.body;

  if (content === '') {
    return res.status(422).send({
      error: 'emptyContentError',
    });
  }

  if (title === '') {
    return res.status(422).send({
      error: 'emptyTitleError',
    });
  }

  // Fetch post
  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({ msg: 'Post not found' });
    }

    data
      .update({
        $set: {
          title,
          content,
          tags,
        },
      })
      .exec();

    return res.status(200).send({ msg: 'Post updated' });
  });
};
