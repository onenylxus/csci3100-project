// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');
require('../schemas/Client');

// Models
const Post = mongoose.model('post');
const Client = mongoose.model('client');

// Exports
module.exports = function fetchPost(req, res) {
  // Fetch request body
  const { page, tags, username } = req.body;
  if (username === '') {
    if (tags === 'Newest') {
      // feed screen: Newest
      const post = Post.find({})
        .sort({ timestamp: -1 })
        .skip(25 * page)
        .limit(25);

      post.then((data) => {
        if (!data) {
          return res.status(422).send({
            error: 'no post in database.',
          });
        }

        const arr = [];
        data.forEach((item) => {
          console.log('item.username: ' + item.username);
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no client in database.',
              });
            }

            arr.push(data1);
          });
        });
        console.log('username: " ", tag: "Newest"' + arr);
        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    } else if (tags === 'Trending') {
      // feed screen: Trending
      const post = Post.find({})
        .sort({ popularity: -1 })
        .skip(25 * page)
        .limit(25);

      post.then((data) => {
        if (!data) {
          return res.status(422).send({
            error: 'no post in database.',
          });
        }

        const arr = [];
        data.forEach((item) => {
          console.log('item.username: ' + item.username);
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no client in database.',
              });
            }

            arr.push(data1);
          });
        });
        console.log('username: " ", tag: "Trending"' + arr);
        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    } else {
      // feed screen: Tags: tags
      const post = Post.find({ tags })
        .sort({ timestamp: -1 })
        .skip(25 * page)
        .limit(25);

      post.then((data) => {
        if (!data) {
          return res.status(422).send({
            error: 'no post in database.',
          });
        }

        const arr = [];
        data.forEach((item) => {
          console.log('item.username: ' + item.username);
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no client in database.',
              });
            }

            arr.push(data1);
          });
        });
        console.log('username: " ", tag: tags' + arr);
        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    }
  } else {
    // profile screen
    const post = Post.find({ username })
      .sort({ timestamp: -1 })
      .skip(25 * page)
      .limit(25);

    post.then((data) => {
      if (!data) {
        return res.status(422).send({
          error: 'no post in database.',
        });
      }

      const arr = [];
      data.forEach((item) => {
        console.log('item.username: ' + item.username);
        const client = Client.findOne({ username: item.username });
        client.then((data1) => {
          if (!data1) {
            return res.status(422).send({
              error: 'no client in database.',
            });
          }

          arr.push(data1);
        });
      });
      console.log('profile screen: ' + arr);
      return res
        .status(200)
        .send({ msg: 'Post fetched.', posts: data, clients: arr });
    });
  }
};
