// Require
const mongoose = require('mongoose');

// Token schema
const TokenSchema = new mongoose.Schema({
  _clientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Client',
  },
  code: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 300,
  },
});
mongoose.model('token', TokenSchema);
