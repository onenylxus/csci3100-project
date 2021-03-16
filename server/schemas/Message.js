// Require
const mongoose = require('mongoose');

// Message schema
const MessageSchema = new mongoose.Schema({
  chatroom: String,
  timestamp: Number,
  sender: String,
});

// Export
module.exports = mongoose.model('message', MessageSchema);
