/**
 * CU There Team
 * @component transporter - To provide a transition to sender
 *
 * @version 0.3.0
 * @author Tse Shun Chi (1155125630)
 * @author Tsang Man Yi (1155125860)
 * @author Ng Wing Yin (1155127101)
 * @author Liu Hoi Pan (1155127464)
 * @author Lam Wai To Keith (1155133260)
 * @license Apache-2.0
 *
 * Used in sender
 * PURPOSE: This module provides a transition to sender so that
 *          sender can sends email to client
 */

// Require
const nodemailer = require('nodemailer');

// Create transporter
module.exports = nodemailer.createTransport({
  service: 'Gmail',
  host: 'csci3100cuthere@gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
