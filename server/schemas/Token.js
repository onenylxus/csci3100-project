// Require
const mongoose = require('mongoose');

// Token schema
const TokenSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 900,
  },
});

// Modeling
mongoose.model('token', TokenSchema);
