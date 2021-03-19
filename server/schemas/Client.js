// Require
const mongoose = require('mongoose');

// Client schema
const ClientSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
});
mongoose.model('client', ClientSchema);
