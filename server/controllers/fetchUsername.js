// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchUsername(req, res) {
  const client = Client.find({}).sort({ popularity: -1 });
  client.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'no client in database.',
      });
    }
    console.log('data.username: ' + data.username);
    console.log('data.popularity: ' + data.popularity);
    return res.status(200).send({
      msg: 'username fetched',
      username: data.username,
      popularity: data.popularity,
    });
  });
};
