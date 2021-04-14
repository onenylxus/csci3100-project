// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');
require('../schemas/Post');
require('../schemas/Comment');

// Models
const Client = mongoose.model('client');
const Comment = mongoose.model('comment');
const Post = mongoose.model('post');

// Exports
module.exports = function deleteAccount(req, res) {
  // Fetch request body
  const { username } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    console.log('data: ' + data);
    if (!data) {
      return res.status(422).send({ msg: 'Client not found' });
    }
    data.deleteOne({});

    Comment.update(
      { username },
      { $set: { username: 'deleted account' } },
      { multi: true },
      (err) => {
        console.log(err);
      }
    );

    Post.update(
      { username },
      { $set: { username: 'deleted account' } },
      { multi: true },
      (err) => {
        console.log(err);
      }
    );

    return res.status(200).send({ msg: 'Deleted post and comment' });
  });
};
