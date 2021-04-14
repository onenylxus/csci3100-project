// Require
const mongoose = require('mongoose');

// Set global buffer
global.Buffer = global.Buffer || require('buffer').Buffer;

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Export
module.exports = function verify(req, res) {
  // Fetch request body
  const { email, code } = req.body;

  // Fetch token
  const token = Token.findOne({ email });

  token.then((data) => {
    // Check token existence
    if (!data) {
      return res.status(422).send({});
    }

    // Check code match
    if (code !== data.code) {
      return res.status(422).send({});
    }

    switch (data.type) {
      case 'register':
        // Create client
        const client = new Client({
          username: data.username,
          password: data.password,
          email: data.email,
          isPublic: true,
          popularity: 0,
        });
        client.save();

        // Remove token
        data.remove();

        // Return
        return res.status(200).send({ type: data.type });

      case 'forgotPassword':
        // Remove token
        data.remove();

        // Return
        return res.status(200).send({ type: data.type });

      default:
        return res.status(422).send({});
    }
  });
};
