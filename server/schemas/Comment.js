// Require
const mongoose = require('mongoose');

// Comment schema
const CommentSchema = new mongoose.Schema({
  post: String,
  username: String,
  numOfLike: Number,
  numOfDislike: Number,
  timestamp: { type: Date, required: true, default: Date.now },
});
mongoose.model('comment', CommentSchema);
