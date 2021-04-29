/**
 * CU There Team
 * @schema Client - client schema
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by deleteAccount, editProfile, fetchData, fetchFollow, fetchPost, fetchUsername, follow, forgotPassword, like, login, register, resetPassword, verify
 * PURPOSE: Model for storing client data
 */

// Require
const mongoose = require('mongoose');

// Client schema
const ClientSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: { hex: String, iv: String },
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: false,
  },
  profilePicture: Buffer,
  status: {
    type: String,
    required: false,
  },
  isPublic: {
    type: Boolean,
    required: true,
  },
  popularity: {
    type: Number,
    required: true,
  },
  follower: {
    type: [String],
    required: true,
  },
  following: {
    type: [String],
    required: true,
  },
});

// Modeling
mongoose.model('client', ClientSchema);
