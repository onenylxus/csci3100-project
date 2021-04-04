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
module.exports = function forgotPassword(req, res) {
  // Fetch request body
  const { email } = req.body;

  // Fetch client and token by email
  const clientEmail = Client.findOne({ email });
  const tokenEmail = Token.findOne({ email });

  tokenEmail.then((data) => {
    if (data) {
      return res.status(422).send({
        error: 'tokenEmailError',
      });
    }
    // Check email existence
    clientEmail.then((data1) => {
      if (!data1) {
        return res.status(422).send({
          error: 'wrongEmailError',
        });
      }
      const token = new Token({
        email,
        code: String(Math.trunc(Math.random() * 10 ** 6)).padStart(6, '0'),
        type: 'forgotPassword',
      });
      token.save();

      // Send email
      try {
        transporter.sendMail({
          from: `csci3100cuthere@gmail.com`,
          to: email,
          subject: `Change your password for CUThere account`,
          html: `Hello,<br /></br >You seem to have forgot your password! Please copy the verification code below and paste it to the app so we know it is you that requested a change of password.<br /></br >Your verification code is ${token.code}. This code will expire in 15 minutes.<br /><br />CU There team`,
        });
        return res.status(200).send({ msg: 'Email sent.' });
      } catch (err) {
        console.log(err);
      }
    });
  });
};
