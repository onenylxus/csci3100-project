// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');
require('../schemas/Token');

// Models
const Client = mongoose.model('client');
const Token = mongoose.model('token');

// Export
module.exports = function verify(req, res) {
  // Fetch request body
  const { username, code } = req.body;

  // Fetch token
  const token = Token.findOne({ username });

  token.then((data) => {
    // Check token existence
    if (!data) {
      return res.status(422).send({});
    }

    // Check code match
    if (code !== data.code) {
      return res.status(422).send({});
    }

    // Create client
    const client = new Client({
      username: data.username,
      password: data.password,
      email: data.email,
      isPublic: true,
    });
    client.save();

    // Remove token
    data.remove();

    // Return
    return res.status(200).send({ msg: 'Client created.' });
  });
};
