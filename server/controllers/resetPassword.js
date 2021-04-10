// Require
const mongoose = require('mongoose');
const cipher = require('../cipher');

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

  client.then((data) => {
    if (password === cipher.decrypt(data.password.hex, data.password.iv)) {
      return res.status(422).send({
        error: 'duplicatePasswordError',
      });
    }

    data
      .update({
        $set: {
          password: cipher.encrypt(password),
        },
      })
      .exec();

    return res.status(200).send({ msg: 'Password Updated.' });
  });
};
