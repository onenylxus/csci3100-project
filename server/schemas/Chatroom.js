// Require
const mongoose = require('mongoose');

// Chatroom schema
const ChatroomSchema = new mongoose.Schema({
  timestamp: Number,
  icon: String,
  name: String,
});
mongoose.model('chatroom', ChatroomSchema);
