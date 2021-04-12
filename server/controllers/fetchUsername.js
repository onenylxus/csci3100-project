// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchUsername(req, res) {
  const client = Client.find({}).sort({ popularity: -1 }).limit(10);
  client.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no client in database.',
      });
    }
    return res.status(200).send({
      username: data.username,
      popularity: data.popularity,
    });
  });
};
