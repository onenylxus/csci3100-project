// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function addInfo(req, res) {
  // Fetch request body
  const { username, name, gender, major, college } = req.body;

  // Fetch client
  const q = Client.where({ username });

  q.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'Your verification code is invalid.',
      });
    }
  });

  q.update({
    $set: {
      name,
      gender,
      major,
      college,
    },
  }).exec();

  return res.status(200).send({ msg: 'Client updated.' });
};
