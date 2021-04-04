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

  // Check username existence
  clientUsername.then((data1) => {
    if (data1) {
      return res.status(422).send({
        error: 'clientUsernameError',
      });
    }
    // Check email existence
    clientEmail.then((data2) => {
      if (data2) {
        return res.status(422).send({
          error: 'clientEmailError',
        });
      }

      tokenUsername.then((data3) => {
        if (data3) {
          return res.status(422).send({
            error: 'tokenUsernameError',
          });
        }

        tokenEmail.then((data4) => {
          if (data4) {
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
            type: 'register',
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
            return res.status(200).send({ msg: 'Email sent. ' });
          } catch (err) {
            console.log(err);
          }
        });
      });
    });
  });
};
