// Require
const mongoose = require('mongoose');
const transporter = require('../transporter');

// Schemas
require('../schemas/token');

// Models
const Token = mongoose.model('token');

// Models
module.exports = function resend(req, res) {
  // Fetch request body
  const { email } = req.body;

  // Fetch token
  const token = Token.findOne({ email });

  // Check token existence
  token.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'expiredError',
      });
    }

    // Send email
    try {
      transporter.sendMail({
        from: `csci3100cuthere@gmail.com`,
        to: email,
        subject: `Confirmation email for ${data.username}`,
        html: `Hello, thank you for signing up to CU There!<br /></br >Your verification code is ${data.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
      });
      return res.status(200).send({ msg: 'Email sent. ' });
    } catch (err) {
      console.log(err);
    }
  });
};
