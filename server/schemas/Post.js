// Require
const mongoose = require('mongoose');

// Post schema
const PostSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    default: true,
  },
  content: {
    type: String,
    default: true,
  },
  numOfLike: {
    type: Number,
    required: false,
  },
  numOfDislike: {
    type: Number,
    required: false,
  },
  comments: {
    type: String,
    required: false,
  },
  tags: {
    type: String,
    required: false,
  },
});

// Modeling
mongoose.model('post', PostSchema);
