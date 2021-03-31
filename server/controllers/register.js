// Require
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
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
  await Client.exists({ username }, (err, bool1) => {
    if (err) {
      console.log(err);
    } else if (bool1) {
      return res.status(422).send({ msg: 'Username is used by someone else.' });
    }
  });

  await Client.exists({ email }, (err, bool2) => {
    if (err) {
      console.log(err);
    } else if (bool2) {
      return res.status(422).send({ msg: 'Email is used by someone else.' });
    }
  });

  await Token.exists({ username }, (err, bool3) => {
    if (err) {
      console.log(err);
    } else if (bool3) {
      return res.status(422).send({ msg: 'Username is used by someone else.' });
    }
  });

  await Token.exists({ email }, (err, bool4) => {
    if (err) {
      console.log(err);
    } else if (bool4) {
      return res.status(422).send({ msg: 'Email is used by someone else.' });
    }
  });

  // Create token and save to database
  const token = new Token({
    username,
    password,
    email,
    code: CryptoJS.lib.WordArray.random(16),
  });
  await token.save();

  // Send email
  try {
    transporter.sendMail({
      from: `csci3100cuthere@gmail.com`,
      to: email,
      subject: `Confirmation email for ${username}`,
      html: `Hi there,<br /><br />We are happy that you signed up for CUThere! To continue the verification process, please click the following link.<br /><br /> Click this: <a href="https://cu-there-server.herokuapp.com/verify/${token.code}">https://cu-there-server.herokuapp.com/verify/${token.code}</a><br /><br />Welcome to CUThere!<br />The CUThere Team`,
    });

    return res.status(200).send({ msg: 'Email sent. ' });
  } catch (err) {
    console.log(err);
  }
};
