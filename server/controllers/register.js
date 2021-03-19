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

  // Check email existence
  Client.findOne({ email }).then((data) => {
    if (data) {
      return res.status(422).send({ error: 'This email has been registered' });
    }

    // Create client and save to database
    const client = new Client({
      username,
      password,
      email,
    });
    client.save().catch((err) => res.status(500).send({ error: err }));

    // Create token and save to database
    const key = CryptoJS.lib.WordArray.random(16);
    const token = new Token({
      _clientId: client._id,
      code: CryptoJS.SHA256(key, { outputLength: 32 }),
    });
    token.save().catch((err) => res.status(500).send({ error: err }));

    // Send email
    const url = `https://cu-there-server.herokuapp.com/verify?=${token.code}`;
    transporter.sendMail(
      {
        from: `csci3100cuthere@gmail.com`,
        to: email,
        subject: `Confirmation email for ${username}`,
        text: emailContext.text(url),
        html: emailContext.html(url),
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
};
