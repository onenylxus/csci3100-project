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
module.exports = async function register(req, res) {
  // Fetch request body
  const { username, password, email } = req.body;

  // Check duplication
  let dupe = false;

  await Client.exists({ username }, (err, bool1) => {
    if (err) {
      console.log(err);
    } else if (bool1) {
      dupe = true;
    }
  });

  await Client.exists({ email }, (err, bool2) => {
    if (err) {
      console.log(err);
    } else if (bool2) {
      dupe = true;
    }
  });

  await Token.exists({ username }, (err, bool3) => {
    if (err) {
      console.log(err);
    } else if (bool3) {
      dupe = true;
    }
  });

  await Token.exists({ email }, (err, bool4) => {
    if (err) {
      console.log(err);
    } else if (bool4) {
      dupe = true;
    }
  });

  if (dupe) {
    return res.status(422).send({ msg: 'Username or email is used.' });
  }

  // Create token and save to database
  const token = new Token({
    username,
    password,
    email,
    code: String(Math.trunc(Math.random() * 10 ** 6)).padStart(6, '0'),
  });
  await token.save();

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
