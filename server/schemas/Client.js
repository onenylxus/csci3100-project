// Require
const mongoose = require('mongoose');

// Client schema
const ClientSchema = new mongoose.Schema({
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
  name: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    enum: ['M', 'F'],
    required: false,
  },
  major: {
    type: String,
    required: false,
  },
  college: {
    type: String,
    enum: ['NA', 'CC', 'SC', 'UC', 'WS', 'YS', 'SH', 'WC', 'MC'],
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
});

// Modeling
mongoose.model('client', ClientSchema);
