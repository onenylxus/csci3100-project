/**
 * CU There Team
 * @schema Post - post schema
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by createComment, createPost, deleteAccount, deletePost, editPost, fetchLike, fetchPost, like
 * PURPOSE: Model for storing post data
 */

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
    required: true,
  },
  content: {
    type: String,
    required: true,
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
