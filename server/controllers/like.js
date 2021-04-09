// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function like(req, res) {
  const { _id, likeState, username } = req.body;

  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'post not found',
      });
    }
    if (likeState === true) {
      data
        .update({
          $push: { peopleLike: username },
        })
        .exec();
    } else {
      data.peopleLike.splice(data.peopleLike.indexOf(username), 1);
      data.update({
        peopleLike: data.peopleLike,
      });
    }

    return res.status(200).send({
      msg: 'data updated',
      like: data.peopleLike,
    });
  });
};
