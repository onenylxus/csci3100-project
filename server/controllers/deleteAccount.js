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
  // const comment = Comment.find({ username });
  const post = Post.find({ username });

  client.then((data) => {
    console.log('data: ' + data);
    if (!data) {
      return res.status(422).send({ msg: 'Client not found' });
    }
    data.deleteOne({});

    /*
    comment.then((data1) => {
      if (data1) {
        console.log('data1 before delete: ' + data1);
        data1.updateMany({ $set: { username: 'Deleted User' } }).exec();
      }
      console.log('data1 after delete: ' + data1);
    });
    */

    post.then((data2) => {
      if (data2) {
        console.log('data2: ' + data2);
        data2
          .update({
            $set: { username: 'Deleted User' },
          })
          .exec();
      }
    });
    return res.status(200).send({ msg: 'Deleted post and comment' });
  });
};
