// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function login(req, res) {
  // Fetch request body
  const { username, password } = req.body;

  // Fetch client
  const q = Client.where({ username });

  q.then((data) => {
    console.log(data);

    // Account not exist
    if (username !== data.username) {
      return res.status(422).send({
        error: 'accountError',
      });
    }

    // Check password
    if (password !== data.password) {
      return res.status(422).send({
        error: 'passwordError',
      });
    }

    return res.status(200).send({ msg: 'User is verified' });
  });
};
