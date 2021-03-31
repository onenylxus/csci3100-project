// Require
const mongoose = require('mongoose');

// Message schema
const MessageSchema = new mongoose.Schema({
  chatroom: String,
  timestamp: Number,
  sender: String,
});

// Modeling
mongoose.model('message', MessageSchema);
