// Require
const mongoose = require('mongoose');
const cipher = require('../cipher');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function login(req, res) {
  // Fetch request body
  const { username, password } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    // Account not exist
    if (!data) {
      return res.status(422).send({
        error: 'accountError',
      });
    }

    // Check password
    if (password !== cipher.decrypt(...data.password)) {
      return res.status(422).send({
        error: 'passwordError',
      });
    }

    return res.status(200).send({ msg: 'User is verified' });
  });
};
