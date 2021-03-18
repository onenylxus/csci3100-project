// Require
const nodemailer = require('nodemailer');

// Create transporter
module.exports = nodemailer.createTransport({
  service: 'Gmail',
  host: 'csci3100cuthere@gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
