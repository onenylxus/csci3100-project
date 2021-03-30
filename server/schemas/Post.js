// Require
const mongoose = require('mongoose');

// Post schema
const PostSchema = new mongoose.Schema({
  username: String,
  timestamp: Number,
  numOfLike: Number,
  numOfDislike: Number,
  comments: String,
  tags: String,
});

// Modeling
mongoose.model('post', PostSchema);
