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
  peopleLike: {
    type: [{ body: String }],
    required: true,
  },
  peopleDislike: {
    type: Number,
    required: true,
  },
  comments: {
    type: [{ body: String, date: Date }],
    required: false,
  },
  tags: {
    type: String,
    required: false,
  },
});

// Modeling
mongoose.model('post', PostSchema);
