/**
 * CU There Team
 * @component fetchPost - A controller to fetch post
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by FeedScreen, GuestFeedScreen and ProfileScreen
 * PURPOSE: This controller fetches post in post database
 */

// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');
require('../schemas/Client');

// Models
const Post = mongoose.model('post');
const Client = mongoose.model('client');

// Set global buffer
global.Buffer = global.Buffer || require('buffer').Buffer;

// Exports
module.exports = function fetchPost(req, res) {
  // Fetch request body
  const { page, tags, username } = req.body;
  let post;
  if (username === '') {
    if (tags === 'Newest') {
      post = Post.find({})
        .sort({ timestamp: -1 })
        .skip(25 * page)
        .limit(25);
    } else if (tags === 'Trending') {
      post = Post.find({})
        .sort({ popularity: -1 })
        .skip(25 * page)
        .limit(25);
    } else {
      post = Post.find({ tags })
        .sort({ timestamp: -1 })
        .skip(25 * page)
        .limit(25);
    }
  } else {
    // profile screen
    post = Post.find({ username })
      .sort({ timestamp: -1 })
      .skip(25 * page)
      .limit(25);
  }

  post.then(async (data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no post in database.',
      });
    }

    const arr = [];
    let bool = false;
    for (const item of data) {
      console.log(item.username);
      if (item.username === 'Anonymous') {
        arr.push(undefined);
      } else {
        const client = Client.findOne({ username: item.username });
        client.then((data1) => {
          bool |= !data1;
          if (!bool) {
            arr.push(data1.profilePicture);
          }
        });
      }
    }
    console.log(arr);
    if (bool) {
      return res.status(422).send({
        error: 'no client in database',
      });
    }

    return res
      .status(200)
      .send({ msg: 'Post fetched.', posts: data, clients: arr });
  });
};
