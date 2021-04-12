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
  profilePicture: {
    data: Buffer,
    contentType: String,
    required: false,
  },
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
});

// Modeling
mongoose.model('client', ClientSchema);
