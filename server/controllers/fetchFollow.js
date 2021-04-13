// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchFollow(req, res) {
  // Fetch request body
  const { other } = req.body;
  console.log('other: ' + other);
  const otherClient = Client.findOne({ username: other });

  otherClient.then((data) => {
    if (!data) {
      return res.status(422).send({
        error: 'Client not found.',
      });
    }
    return res.status(200).send({
      msg: 'follower fetched',
      follower: otherClient.follower,
    });
  });
};
