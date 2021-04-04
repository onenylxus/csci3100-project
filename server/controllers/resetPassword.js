// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function resetPassword(req, res) {
  // Fetch request body
  const { email, password } = req.body;

  // Fetch client by email
  const client = Client.findOne({ email });

  if (password === client.password) {
    return res.status(422).send({
      error: 'duplicatePasswordError',
    });
  }
  // Update password
  client
    .update({
      $set: {
        password,
      },
    })
    .exec();

  client.then(() => res.status(200).send({ msg: 'Password Updated.' }));
};
