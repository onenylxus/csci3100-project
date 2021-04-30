/**
 * CU There team
 * @component deleteAccount - A controller to delete account in client database
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by SettingScreen
 * PURPOSE: This controller deletes client in client database
 */

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
