// Require
const nodemailer = require('nodemailer');

// Create transporter
const transporter = nodemailer.createTransport({
  host: 'example@gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Export
module.exports.sendEmail = async (register) => {
  await transporter.sendMail({
    from: 'CU There <example@gmail.com>',
    to: register.email,
    subject: `Confirmation email for ${register.username}`,
    text: 'abc',
    html: 'abc',
  });
};
