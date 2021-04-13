// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');
require('../schemas/Post');
require('../schemas/Comment');

// Models
const Client = mongoose.model('client');
const Post = mongoose.model('post');

// Exports
module.exports = function deleteAccount(req, res) {
  // Fetch request body
  const { username } = req.body;

  // Fetch client
  const client = Client.findOne({ username });
  client.then((data) => {
    if (!data) {
      return res.status(422).send({ msg: 'Client not found' });
    }
    data.deleteOne({});
    const comment = Comment.find({ username });
    comment.then((data1) => {
      data1
        .update({
          $set: { username: 'Deleted User' },
        })
        .exec();
    });

    const post = Post.find({ username });
    post.then((data2) => {
      data2
        .update({
          $set: { username: 'Deleted User' },
        })
        .exec();
    });
    return res.status(200).send({ msg: 'Deleted post and comment' });
  });
};
