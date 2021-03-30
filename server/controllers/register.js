// Require
const mongoose = require('mongoose');
const CryptoJS = require('crypto-js');
const emailContext = require('../emailContext');
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

  // Check username existence
  Client.findOne({ username }).then((data1) => {
    if (data1) {
      return res.status(422).json({
        error: 'This username is used by someone else.',
      });
    }

    // Check email existence
    Client.findOne({ email }).then((data) => {
      if (data) {
        return res.status(422).json({
          error: 'This email has been registered.',
        });
      }

      // Create client and save to database
      const client = new Client({
        username,
        password,
        email,
      });
      client.save().catch((err) => res.status(500).json({ error: err }));

      // Create token and save to database
      const key = CryptoJS.lib.WordArray.random(16);
      const token = new Token({
        _clientId: client._id,
        code: key,
      });
      token.save().catch((err) => res.status(500).json({ error: err }));

      // Send email
      transporter.sendMail(
        {
          from: `csci3100cuthere@gmail.com`,
          to: email,
          subject: `Confirmation email for ${username}`,
          text: emailContext.text(token.code),
          html: emailContext.html(token.code),
        },
        (err, info) => {
          if (err) {
            return console.log(err);
          }

          res.status(200).send({
            message: 'Email sent',
            message_id: info.messageId,
          });
          return res;
        }
      );
    });
  });
};
