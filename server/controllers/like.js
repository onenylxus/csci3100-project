/**
 * CU There Team
 * @component like - Update like status in database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by LikeContainer
 * PURPOSE: This controller updates number of likes and popularity in
 *          post database and client database
 */

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
