// Require
const mongoose = require('mongoose');

// Post schema
const ReportSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

// Modeling
mongoose.model('post', ReportSchema);
