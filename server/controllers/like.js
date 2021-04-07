// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function like(req, res) {
  const { _id, username } = req.body;

  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'post not found',
      });
    }
    console.log(username);
    data
      .update({
        $push: { peopleLike: username },
      })
      .exec();

    return res.status(200).send({
      msg: 'data updated',
    });
  });
};
