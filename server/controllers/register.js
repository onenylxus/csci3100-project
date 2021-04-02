// Require
const mongoose = require('mongoose');
const transporter = require('../transporter');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Exports
module.exports = function register(req, res) {
  // Fetch request body
  const { username, password, email } = req.body;

  // Fetch client and token by username and email
  const clientUsername = Client.findOne({ username });
  const clientEmail = Client.findOne({ email });
  const tokenUsername = Token.findOne({ username });
  const tokenEmail = Token.findOne({ email });

  console.log(clientUsername);

  let bool = false;

  // Existing client and email
  clientUsername.then((data) => {
    // Client exist
    if (data) {
      bool = true;
    }
  });
  if (bool) {
    return res.status(422).send({
      error: 'clientUsernameError',
    });
  }

  clientEmail.then((data) => {
    // Client exist
    if (data) {
      bool = true;
    }
  });
  if (bool) {
    return res.status(422).send({
      error: 'clientEmailError',
    });
  }

  tokenUsername.then((data) => {
    // Token exist
    if (data) {
      bool = true;
    }
  });
  if (bool) {
    return res.status(422).send({
      error: 'tokenUsernameError',
    });
  }

  tokenEmail.then((data) => {
    // Token exist
    if (data) {
      bool = true;
    }
  });
  if (bool) {
    return res.status(422).send({
      error: 'tokenEmailError',
    });
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
      html: `Hello, thank you for signing up to CU There!<br /></br >Your verification code is ${token.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
    });
    return res.status(200).json({ msg: 'Email sent. ' });
  } catch (err) {
    console.log(err);
  }
};
