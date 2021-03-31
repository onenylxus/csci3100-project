// Require
const mongoose = require('mongoose');
const transporter = require('../transporter');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Export
module.exports = function register(req, res) {
  // Fetch request body
  const { username, password, email } = req.body;

  // Check duplication
  let bool = false;

  Client.exists({ username }).then((bool1) => {
    bool |= bool1;
  });

  Client.exists({ email }).then((bool2) => {
    bool |= bool2;
  });

  Token.exists({ username }).then((bool3) => {
    bool |= bool3;
  });

  Token.exists({ email }).then((bool4) => {
    bool |= bool4;
  });

  if (bool) {
    return res.status(422).send({ msg: 'Username or email is used.' });
  }

  // Create token and save to database
  const token = new Token({
    username,
    password,
    email,
    code: String(Math.trunc(Math.random() * 10 ** 6)).padStart(6, '0'),
  });
  token.save();

  // Send email
  try {
    transporter.sendMail({
      from: `csci3100cuthere@gmail.com`,
      to: email,
      subject: `Confirmation email for ${username}`,
      html: `Hello,<br /></br >Your verification code is ${token.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
    });
    return res.status(200).send({ msg: 'Email sent. ' });
  } catch (err) {
    console.log(err);
  }
};
