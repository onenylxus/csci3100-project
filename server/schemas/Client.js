// Require
const mongoose = require('mongoose');

// Client schema
const ClientSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

// Export
module.exports = mongoose.model('client', ClientSchema);
