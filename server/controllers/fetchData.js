// Require
const mongoose = require('mongoose');

// Schemas
require('../schemas/Client');

// Models
const Client = mongoose.model('client');

// Exports
module.exports = function fetchData(req, res) {
  // Fetch request body
  const { username } = req.body;

  // Fetch client
  const client = Client.findOne({ username });

  client.then((data) => {
    if (!data) {
      return res.status(422).send({});
    }

    return res.status(200).send({
      msg: 'Client fetched',
      name: data.name,
      gender: data.gender,
      major: data.major,
      college: data.college,
      bio: data.bio,
      image: data.profilePicture ? data.profilePicture.toString('base64') : '',
    });
  });
};
