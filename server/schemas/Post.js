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
    type: [String],
    required: true,
  },
  peopleDislike: {
    type: [String],
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },
});

// Modeling
mongoose.model('post', PostSchema);
