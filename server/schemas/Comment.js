// Require
const mongoose = require('mongoose');

// Comment schema
const CommentSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Modeling
mongoose.model('comment', CommentSchema);
