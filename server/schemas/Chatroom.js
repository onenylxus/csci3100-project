// Require
const mongoose = require('mongoose');

// Chatroom schema
const ChatroomSchema = new mongoose.Schema({
  timestamp: { type: Date, required: true, default: Date.now },
  icon: String,
  name: String,
});
mongoose.model('chatroom', ChatroomSchema);
