// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function likeAndDislike(req, res) {
  const { _id, state, likeType, username } = req.body;

  const post = Post.findOne({ _id });

  post.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'post not found',
      });
    }
    console.log('state: ' + state);
    console.log('likeType' + likeType);
    if (state === 1) {
      data
        .update({
          $push: { peopleLike: username },
        })
        .exec();
    } else if (state === -1) {
      data
        .update({
          $push: { peopleDislike: username },
        })
        .exec();
    } else if (state === 0 && likeType === 'like') {
      data.peopleLike.splice(data.peopleLike.indexOf(username), 1);
      data
        .update({
          $set: { peopleLike: data.peopleLike },
        })
        .exec();
    } else if (state === 0 && likeType === 'dislike') {
      data.peopleDislike.splice(data.peopleDisLike.indexOf(username), 1);
      data
        .update({
          $set: { peopleDisLike: data.peopleDisLike },
        })
        .exec();
    }

    return res.status(200).send({
      msg: 'data updated',
      like: data.peopleLike,
      dislike: data.peopleDislike,
    });
  });
};
