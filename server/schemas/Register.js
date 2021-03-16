// Require
const mongoose = require('mongoose');

// Register schema
const RegisterSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

// Export
module.exports = mongoose.model('register', RegisterSchema);
