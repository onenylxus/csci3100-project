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
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no post in database.',
              });
            }

            arr.push(data1);
          });
        });

        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    } else if (tags === 'Trending') {
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
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no post in database.',
              });
            }

            arr.push(data1);
          });
        });

        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    } else {
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
          const client = Client.findOne({ username: item.username });
          client.then((data1) => {
            if (!data1) {
              return res.status(422).send({
                error: 'no post in database.',
              });
            }

            arr.push(data1);
          });
        });

        return res
          .status(200)
          .send({ msg: 'Post fetched.', posts: data, clients: arr });
      });
    }
  } else {
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
        const client = Client.findOne({ username: item.username });
        client.then((data1) => {
          if (!data1) {
            return res.status(422).send({
              error: 'no post in database.',
            });
          }

          arr.push(data1);
        });
      });

      return res
        .status(200)
        .send({ msg: 'Post fetched.', posts: data, clients: arr });
    });
  }
};
