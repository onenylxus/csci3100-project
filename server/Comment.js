// Require
const mongoose = require('mongoose');

// Comment schema
const CommentSchema = new mongoose.Schema({
  post: String,
  username: String,
  numOfLike: Number,
  numOfDislike: Number,
  timestamp: Number,
});
mongoose.model('comment', CommentSchema);
