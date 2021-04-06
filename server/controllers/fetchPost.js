// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Post');

// Models
const Post = mongoose.model('post');

// Exports
module.exports = function fetchPost(req, res) {
  Post.find()
    .populate('posts')
    .exec((data) => {
      if (!data) {
        return res.status(422).send({
          error: 'no post in database.',
        });
      }
      console.log(data.username);
      console.log(data.Date);
      console.log(data.content);
      return res.status(200).send({ msg: 'Post fetched.' });
    });
};
