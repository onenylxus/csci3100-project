// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');
require('../schemas/Client');

// Models
const Post = mongoose.model('post');
const Client = mongoose.model('client');

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
    console.log(likeState);
    if (likeState === false) {
      data
        .update({
          $push: { peopleLike: username },
          $inc: { popularity: 1 },
        })
        .exec();
      const client = Client.findOne({ username });
      client.then((data1) => {
        data1
          .update({
            $inc: { popularity: 1 },
          })
          .exec();
      });
    } else {
      data.peopleLike.splice(data.peopleLike.indexOf(username), 1);
      data
        .update({
          $set: { peopleLike: data.peopleLike },
          $inc: { popularity: -1 },
        })
        .exec();
      const client = Client.findOne({ username });
      client.then((data2) => {
        data2
          .update({
            $inc: { popularity: -1 },
          })
          .exec();
      });
    }

    return res.status(200).send({
      msg: 'data updated',
      like: data.peopleLike,
    });
  });
};
