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
    // Account not exist
    if (!data) {
      return res.status(422).json({
        error:
          'This account does not exist, please try again or start register CU There.',
      });
    }

    // Check password
    if (password !== data.password) {
      return res.status(422).json({
        error: 'The password is incorrect, please try again',
      });
    }
    return res.status(200).send({ msg: 'User is verified' });
  });
};
