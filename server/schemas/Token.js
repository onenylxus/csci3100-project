// Require
const mongoose = require('mongoose');

// Token schema
const TokenSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: { hex: String, iv: String },
    required: false,
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
  type: {
    type: String,
    enum: ['register', 'forgotPassword'],
    required: true,
  },
});

// Modeling
mongoose.model('token', TokenSchema);
