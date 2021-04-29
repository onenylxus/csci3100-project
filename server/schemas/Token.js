/**
 * CU There Team
 * @schema Token - token schema
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used by abort, forgotPassword, register, resend, verify
 * PURPOSE: Model for storing token data
 */

// Require
const mongoose = require('mongoose');

// Token schema
const TokenSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
  },
  password: {
    type: { hex: String, iv: String },
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    expires: 900,
  },
  type: {
    type: String,
    enum: ['register', 'forgotPassword'],
    required: true,
  },
});

// Modeling
mongoose.model('token', TokenSchema);
